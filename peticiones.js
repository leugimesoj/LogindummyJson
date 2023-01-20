async  function getUSuarios(){
    const users=await (await fetch("https://dummyjson.com/users")).json()
    return users
    
    
}

export async function validacionDatos(data ){
    const usuarios= await getUSuarios();
    let response={status:404,user:""};
    console.log(data)

    usuarios.users.map((item)=>{
        if(item.email==data.email && item.password== data.password){
            
            response.status=200
            response.user=item.username
        }
    })
    
    return response
}