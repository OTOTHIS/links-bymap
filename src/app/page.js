import Image from "next/image";

export default function Home() {
  return (
<main>
  <h1 className="titulo-sep">Bymap</h1>
  <section>
    <ul>
      <a href="http://bymap-laravel-1981592876.eu-north-1.elb.amazonaws.com/api/public/products" target="_blank">
        <li style={{background: 'linear-gradient(to right, #8e2de2, #4a00e0)'}}>
          <span>
            ByMap service api 
          </span>
        </li>
      </a>
      <a href="https://drive.google.com/file/d/1ZcdDAPOTJWDM7FV2_y--kGFxh1uxRvah/view?usp=drive_link" target="_blank">
        <li style={{background: 'linear-gradient(to right, #0866C2, #044d96)'}}>
          {/* <i data-feather="linkedin"></i> */}
          <span>
            ByMap Management
          </span>
        </li>
      </a>
      <a href="https://drive.google.com/file/d/1g60n-LDrTnqhHJglthGUlfZPxBlaX_mZ/view?usp=drive_link" target="_blank">
        <li style={{background: 'linear-gradient(to right, #2673ca, #346485)'}}>
          <span>
            ByMap App
          </span>
        </li>
      </a>
      <a href="https://by-map.vercel.app/faqs" target="_blank">
        <li style={{background: 'linear-gradient(to right, #9676FC, #765dca)'}}>
          <span>
            ByMap website
          </span>
        </li>
      </a>
    </ul>
  </section>
  <hr style={{marginTop: '10%', height: '1px', borderWidth: 0, color: 'white', backgroundColor: 'gray'}} />
  <h1 className="titulo-sep">Othmane assadi</h1>
</main>

  );
}
