// const URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuhUxuQkpPfTGGFQSVhI3nTy_46-aH6Tj-Zw&s"

const Avatar = (props)=>{
    const {link,alt} = props
    return <div style = {{borderRadius : "50%" , with: "100px", height:"100px", overflow: "hidden"}} >
        <img style = {{height:"100%"}} 
        src= {link} />
        
    </div>
}

export default Avatar