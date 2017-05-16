export function routes ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true)

    $routeProvider
    .when('/', {
        template: '<dta-gameover></dta-gameover>'
    })

    .when('/play',{
        template: '<dta-game></dta-game>'

    })

    .otherwise({
        redirectTo: '/'
    })
}