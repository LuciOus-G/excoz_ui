export default function ({app, redirect}) {
    // if (app.$getses('cron') !== 'true'){
    //     console.log('masuk job')
    //     sessionStorage.setItem('cron', 'true')
    //     const CronJob = require('cron').CronJob;
    //     const job = new CronJob('8 * * * * *', function() {
    //         app.$apiauth.post('/auth/refresh-token').then((response) => {
    //             if (app.$cookies.get('Authorization', { parseJSON: false }) === undefined){
    //                 sessionStorage.setItem(
    //                     'Authorization',
    //                     response.data.access_token
    //                 )
    //             } else if (app.$getses("Authorization") === null){
    //                 const d = new Date()
    //                 d.setTime(d.getTime() + 90 * 24 * 60 * 60 * 1000)
    //                 const expires = 'expires=' + d.toUTCString()
    //                 document.cookie ='Authorization=' +response.data.access_token +';' +expires +';path=/';
    //             } else {
    //                 redirect("/auth/login")
    //             }
    //         }).catch((error) => {
    //             console.log(error)
    //             redirect("/auth/login")
    //     });
    //     }, null, true, 'Asia/Jakarta');
    //     job.start();
    // }

    window.onload = function() {
        console.log('masuk job')
        sessionStorage.setItem('cron', 'true')
        const CronJob = require('cron').CronJob;
        const isCookie = app.$cookies.get('esh.aid', { parseJSON: false })
        const isSession = app.$getses("esh.aid")
        let aid;

        if (isCookie === undefined) {
            aid = isSession
        } else if (isSession === null) {
            aid = isCookie
        }

        const job = new CronJob('8 * * * * *', function() {
            app.$apiauth.post('/auth/refresh-token', {token: aid}).then((response) => {
                if (isCookie === undefined){
                    sessionStorage.setItem(
                        'esh.aid',
                        response.data.refresh_token
                    )
                    sessionStorage.setItem(
                        'auth',
                        response.data.access_token
                    )
                } else if (isSession === null){
                    const d = new Date()
                    d.setTime(d.getTime() + 90 * 24 * 60 * 60 * 1000)
                    const expires = 'expires=' + d.toUTCString()
                    document.cookie ='esh.aid=' +response.data.refresh_token +';' +expires +';path=/';
                    document.cookie ='auth=' +response.data.access_token +';' +expires +';path=/';
                } else {
                    redirect("/auth/login")
                }
            }).catch((error) => {
                console.log(error)
                redirect("/auth/login")
        });
        }, null, true, 'Asia/Jakarta');
        job.start();
    }
  }