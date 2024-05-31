import Header from "./Header";

export default function Contact(){
    return(
        <>
            <Header/>
          
            <section className="form">
            <h1>Contact Form</h1>
            <div>
                <input type="text" placeholder="First Name"/>
            </div>
            <div>
                <input type="text" placeholder="Email"/>
            </div>
            <div>
                <textarea/>
            </div>
            <div>
                <button>Send</button>    
            </div>
            </section>
        </>
    )
}

