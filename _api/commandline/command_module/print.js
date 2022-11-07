export default function(command) {
    let prints = '';
    for (let i = 1; i < command.length; i++) {
        prints += command[i] + ' ';
    }
    commandLine.log(prints);
}