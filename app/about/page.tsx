import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
    return (
        <>
            <div className="max-w-4xl m-auto">


            <Navbar />
            <div className="min-h-screen">
                <div className="p-8">


                <div className="mb-10">
                    <p className="text-blue-600">hi, hai, 你好</p>
                </div>
                <div className="mb-10">
                    <p>i&apos;m an asean scholar studying computing science @ singapore institute of technology.
                        i like to learn, code & build stuff.</p>
                </div>
                <div className="mb-10">
                    <p>when i&apos;m not coding, you can catch me aimlessly consuming chess videos, livestreams, or listen to music.
                        i occasionally boulder, into formula 1, and have been wanting to get back to drumming.</p>
                </div>
                <div className="mb-10">
                    <p>the more you know, the more you do not know. so i am always open to opportunities to growth!</p>
                </div>
                <div className="">
                    connect with me <a href="mailto:2301174@sit.singaporetech.edu.sg"><span className="font-bold">here</span></a>
                </div>
                </div>
                <Footer />
            </div>




            </div>

        </>
    )
}