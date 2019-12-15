SELECT patient_id FROM
(
    SELECT patient_death.patient_id, MAX(patient_death.death_date) death_date, max_encounter_date.encounter_datetime FROM (

         SELECT p.patient_id, MAX(ps.start_date) death_date FROM patient p INNER JOIN patient_program pg ON p.patient_id=pg.patient_id
		    INNER JOIN patient_state ps ON pg.patient_program_id=ps.patient_program_id WHERE pg.voided=0 AND ps.voided=0 AND p.voided=0 
            AND pg.program_id=2 AND ps.state = 10 AND ps.end_date IS NULL AND ps.start_date <= :endDate AND location_id = :location
                GROUP BY pg.patient_id
                    
        UNION

        SELECT p.patient_id, MAX(o.obs_datetime) state_date FROM patient p INNER JOIN encounter e ON p.patient_id=e.patient_id
		        INNER JOIN obs o ON e.encounter_id=o.encounter_id WHERE e.voided=0 AND o.voided=0 AND p.voided=0
                AND e.encounter_type=53 AND o.concept_id=6272 AND o.value_coded = 1366 AND o.obs_datetime <= :endDate AND e.location_id = :location
                GROUP BY p.patient_id 
	    
        SELECT person_id AS patient_id, death_date FROM person p WHERE p.dead=1 AND p.death_date IS NOT NULL AND p.death_date <= :endDate

        UNION

        SELECT p.patient_id, MAX(obsObito.obs_datetime) state_date FROM patient p INNER JOIN encounter e ON p.patient_id=e.patient_id
		        INNER JOIN obs obsEncontrado ON e.encounter_id=obsEncontrado.encounter_id INNER JOIN obs obsObito ON e.encounter_id=obsObito.encounter_id
		        WHERE e.voided=0 AND obsEncontrado.voided=0 AND p.voided=0 AND obsObito.voided=0 AND e.encounter_type IN (21,36,37) AND e.encounter_datetime <= :endDate
                AND e.location_id = :location AND obsEncontrado.concept_id IN (2003, 6348) AND obsEncontrado.value_coded=1066 AND obsObito.concept_id=2031 AND obsObito.value_coded=1383
                GROUP BY p.patient_id 

    )patient_death LEFT JOIN 
    (
        SELECT encounter_date.patient_id, MAX(encounter_date.encounter_datetime) encounter_datetime FROM 
        ( 
            SELECT p.patient_id, e.encounter_datetime FROM patient p 
            INNER JOIN encounter e ON p.patient_id = e.patient_id
            LEFT JOIN obs o ON o.encounter_id = e.encounter_id
                WHERE e.encounter_type = 18 AND p.voided = 0 AND e.voided = 0 AND o.voided = 0 AND e.location_id = :location AND o.value_datetime IS NOT NULL
                AND e.encounter_datetime <= :endDate
                AND e.encounter_datetime = (SELECT MAX(ee.encounter_datetime) FROM encounter ee WHERE ee.patient_id = p.patient_id)
                    GROUP BY p.patient_id

            UNION
            
            SELECT p.patient_id, e.encounter_datetime FROM patient p
                INNER JOIN encounter e ON p.patient_id = e.patient_id
                LEFT JOIN obs o ON o.encounter_id = e.encounter_id
                    WHERE e.encounter_type IN (6,9) AND p.voided=0 AND e.voided=0 AND o.voided = 0
                    AND e.location_id = :location AND e.encounter_datetime <= :endDateAND o.concept_id = 1410 AND o.value_datetime IS NOT NULL
                    AND e.encounter_datetime = (SELECT MAX(ee.encounter_datetime) FROM encounter ee WHERE ee.patient_id = p.patient_id)
                    GROUP BY p.patient_id

            UNION

            SELECT p.patient_id, DATE_ADD(MAX(o.value_datetime), INTERVAL 30 DAY) FROM patient p
            INNER JOIN encounter e ON p.patient_id = e.patient_id INNER JOIN obs o ON o.encounter_id = e.encounter_id
                WHERE e.encounter_type = 52 AND p.voided=0 AND e.voided=0 AND o.voided = 0 AND e.location_id = :location 
                AND o.value_datetime <= :endDate
                AND o.concept_id = 23866
                GROUP BY p.patient_id

        )encounter_date GROUP BY encounter_date.patient_id
    )max_encounter_date ON max_encounter_date.patient_id = patient_death.patient_id GROUP BY max_encounter_date.patient_id

)all_death WHERE encounter_datetime IS NULL OR (encounter_datetime IS NOT NULL AND death_date > encounter_datetime);