/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here
var extension = fileName.split('.');
extension = extension[extension.length - 1];
if(fileName[0] === '#' || extension === 'pdf' || extension === 'docx'){
    console.log('Store');
} else{
    console.log('Delete');
}