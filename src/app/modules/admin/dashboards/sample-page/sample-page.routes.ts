import { ActivatedRouteSnapshot, Route, RouterStateSnapshot } from '@angular/router';
import { InventoryListComponent } from '../list/inventory.component';
import { SamplePageComponent } from './sample-page.component';
import { SampleDetailDataComponent } from './SampleDetailData/sample-detail-data.component';
import { catchError, throwError } from 'rxjs';

const detailResolver = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    // const academyService = inject(AcademyService);
    // const router = inject(Router);

    console.log('this is ID: ', route.paramMap.get('id'))

    // return academyService.getCourseById(route.paramMap.get('id')).pipe(
    //     // Error here means the requested course is not available
    //     catchError((error) => {
    //         // Log the error
    //         console.error(error);

    //         // Get the parent url
    //         const parentUrl = state.url.split('/').slice(0, -1).join('/');

    //         // Navigate to there
    //         router.navigateByUrl(parentUrl);

    //         // Throw an error
    //         return throwError(error);
    //     })
    // );
};

export default [
    { path: '', component: SamplePageComponent },
    { path: 'list', component: InventoryListComponent },
    {
        path: ':id',
        component: SampleDetailDataComponent,
        resolve: {
            course: detailResolver,
        },
    },
] as Route[];
