const validate = ({age = 0})=>{
    return age>=18;
}

const submit = (customer,success,fail) =>{
    if(!validate(customer)){
        fail();
        return;
    }
    success();
}

module.exports={
    _validate : validate,
    submitOrder : submit
}