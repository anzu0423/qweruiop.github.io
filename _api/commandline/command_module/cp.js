export default function(command) {
    let pages = {
        home: {
            url: "/"
        },
        activities: {
            url: "/activities/",
        },
        contact: {
            url: "/contact/"
        },
        join: {
            url: "/join/"
        },
        members: {
            url: "/members/"
        },
    }

    let page = command[1];
    if (pages[page]) {
        location.href = pages[page].url;
    } else {
        commandLine.log('Page not found.');
    }
}