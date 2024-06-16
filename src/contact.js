import styled from "styled-components";


const Contact = () => {
  
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;
        
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
    
    <h2 className="common-heading">Contact Page</h2>
  
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.1616280847647!2d72.88937527926367!3d21.22543843012586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f613fc5928f%3A0x6daf570170a2d151!2sAashadeep%20Vidhyalay%201!5e0!3m2!1sen!2sin!4v1717479007554!5m2!1sen!2sin" width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  <div className="container">
    <div className="contact-form">
      <form action="https://formspree.io/f/xdoqrwnk" method="post" className="contact-inputs">
        <input type="text" placeholder="Username" name="username" required autoComplete="off" />
        <input type="Email" placeholder="Email Id" required autoComplete="off"></input>
        <textarea placeholder="Enter your message" cols="30" rows="10" required autoComplete="off" name="Message"/>
        <input type="submit" value="Send"/>
      </form>

    </div>
  </div>
  </Wrapper>;
};

export default Contact;