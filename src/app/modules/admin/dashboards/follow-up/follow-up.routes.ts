import { ActivatedRouteSnapshot, Route, RouterStateSnapshot } from '@angular/router';
import { FollowUpPageComponent } from './follow-up.component';
import { FollowUpDetailDataComponent } from './FollowUpDetailData/follow-up-detail-data.component';

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
    { path: '', component: FollowUpPageComponent },
    {
        path: ':id',
        component: FollowUpDetailDataComponent,
        resolve: {
            course: detailResolver,
        },
    },
] as Route[];
