const greeting = ({name = 'asd'},callback)=>{
    callback (`hello ${name}`);
};

module.exports = {
    default : greeting
}