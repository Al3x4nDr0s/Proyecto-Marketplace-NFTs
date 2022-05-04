import React , {useState} from 'react';
import Input from "./shared/Input"

function NftForm(props) {

    


    const [ form , setForm ] = useState({
        id : 0,
        nftName : "",
        image : "",
        description : "",
        details :{
            user_creator: "",
            owner : "",
            contract_address: "",
        },
        collection_nft:{
            colletionName:"",
        },

    })

    return (
        <div>
            <form action="">
                <Input
                 placeholder={"Nft Name"}
                 value={value}
                 type={type}
                 width={width}
                 height={height}
                 name={name}
                 label={label}
                 onChange={onChange}
                 onBlur={onBlur}

                
                />


            </form>
        </div>
    );
}

export default NftForm;