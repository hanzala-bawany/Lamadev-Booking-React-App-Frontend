import "./MailList.css"

const MailList = () => {
  return (
    <div className="mail">

        <h2 id="emailHeading">Save time, save money!</h2>
        <span className="para">Sign up and we will send the best deals to you</span>
        <div className="inputConatiner">

            <input type="email" className="email" placeholder="abc@gmail.com" />
            <button className="emailBtn">Subscribe</button>

        </div>
        
    </div>
  )
}

export default MailList