const fs = require('fs');//file system standard libary 
const path = require('path');// path also standard libary

//path.join uses to join the path
//__dirname which gives current path
//path.join first argumeent was current path name than I separate by coma , where I wnat go directory
const directoryName = path.join(__dirname, '..', '..', '..', '..', 'Movies', 'Tamil Movies');
//directoryNAme give path from where I want to print file

if (fs.existsSync(directoryName)) { //if path exist this loop run
    const filename = fs.readdirSync(directoryName); //filname gives array of file name

    console.log('Filename in directory:')
    filename.forEach((file) => { //looping through array
        console.log('File :', file); //It's print filname
    })
} else {
    console.log('Directory not found'); // else print Directory not found
}