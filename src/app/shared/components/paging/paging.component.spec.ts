import {PagingComponent} from '../paging/paging.component';

describe('Paging Component', () => {

    let paging: PagingComponent;

    beforeAll(() => {
        paging = new PagingComponent;
    });

    it('Should return a number of pages if pageNumber is less tha MAX_PAGING ', ()=> {
        let pageNumber = 5;

        let pages = paging.getPages(pageNumber);

        expect(pages.length).toBe(pageNumber);
    })
})
