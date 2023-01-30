import { useState, useEffect } from "react"
function Content(){
    const [title, setTitle] = useState('')
    useEffect(()=>{
        document.title = title
    })

    const [ava, setAva] = useState()
    useEffect(()=>{
        return ()=>{
        ava && URL.revokeObjectURL(ava.preview)
        }
    }, [ava])
    const handPreview=(e)=>{
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAva(file)
    }
    return(
        <div>
            <input 
                value={title}
                onChange={e=> setTitle(e.target.value)}
                />
            <input
                type="file"
                onChange={handPreview}
            />
            {ava && (
                <img src={ava.preview} alt="" width="80%" />
            )}
        </div>
    )
}
export default Content