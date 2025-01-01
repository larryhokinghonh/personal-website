import Navbar from './components/Navbar';
import Footer from './components/Footer';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const roboto = Roboto({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font-roboto"
// })

export default function Home() {


  return (
    <>
      <div className="max-w-4xl m-auto">
        <Navbar />    
        <div className="p-8">

          <p className=" mb-6">WORK</p>
            <div className="mb-10 ">
              <p>tutoring primary and secondary school students mathematics</p>
              <div>
                <p>may 24&apos; - ongoing</p>
              </div>
            </div>
            <div className="mb-10 ">
              <p>taught programming concepts to children @ <a className="underline" href="https://www.logiscool.com/en/" target="_blank">Logiscool</a></p>
              <div>
                <p>oct 23&apos; - june 24&apos;</p>
                <p className="text-blue-600">python, lua</p>
              </div>
            </div>
            <div className="">
              <p>built a marketing portal, intial landing page, designed mobile UIs @ <a className="underline" href="https://www.flipbizz.com/" target="_blank">Flipbizz</a></p>
              <div>
                <p>oct 22&apos; - aug 23&apos;, aug 24&apos;</p>
                <p className="text-blue-600">php, js, html, css, figma</p>
              </div>
            </div>
        </div>

        <div className="p-8">
          <p className=" mb-6">PROJECTS</p>
          <div className="mb-10">
            <p>spotify song recommender</p>
            <div>
              <p className="text-blue-600">python, html, css, javascript, docker, kubernetes</p>
            </div>
          </div>
          <div className="mb-10">
            <p>currency converter</p>
            <div>
              <p className="text-blue-600">python, matplotlib</p>
            </div>
          </div>
          <div className="mb-10">
            <p>simon says</p>
            <div>
              <p className="text-blue-600">html, css, nodejs, express, mysql</p>
            </div>
          </div>
          <div className="">
            <p>lru algorithm learning game</p>
            <div>
              <p className="text-blue-600">html, css, electronjs</p>
            </div>
          </div>
        </div>

        <div className="p-8">
          <p className=" mb-6">LEADERSHIP</p>
          <div className="mb-10">
            <p>mindsports club @ sit</p>
            <div>
              <div className="flex flex-row">
                <div>
                  <p>publicity officer</p>
                </div>
                <div className="ml-auto mr-0">
                  <p>2025</p>
                </div>
              </div>
              <div className="flex flex-row">
                <div>
                  <p>president</p>
                </div>
                <div className="ml-auto mr-0">
                  <p>2024</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <p>graphics design club @ wmskl</p>
            <div className="flex flex-row">
                <div>
                  <p>president</p>
                </div>
                <div className="ml-auto mr-0">
                  <p>2020</p>
                </div>
              </div>
              <div className="flex flex-row">
                <div>
                  <p>vice president</p>
                </div>
                <div className="ml-auto mr-0">
                  <p>2019</p>
                </div>
              </div>
          </div>
        </div>

        <div className="p-8">
          <p className=" mb-6">HACKATHONS</p>
          <div className="flex flex-row">
            <div>
              <p>doublecheck</p>
              <p>best pitch @ hackrift 2024</p>
            </div>
            <div className="ml-auto mr-0">
              <a className="underline" href="https://www.linkedin.com/posts/larryhkh_hackrift2024-activity-7275238172094046209-Kl9X?" target="_blank"><p>post</p></a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
