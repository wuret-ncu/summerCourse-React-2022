export default function Item({title, content, id, deleteData}) {
    const handlepDelete = () =>{
        deleteData((prevData)=>{
           return prevData.filter(item => item.id !== id)
        })
    }
  return (
    <div className="item">
        <h2>{title}</h2>
        <p>{content}</p>
        <button onClick={handlepDelete}>delete</button>
    </div>
  )
}
