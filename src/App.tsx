import { useState, useEffect } from "react";
import vector from "./assets/images/vector.png";
import leftcorner from "./assets/images/leftcorner.png";
import separator from "./assets/images/separator.png";
import "./App.css";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import utcrew from "./assets/images/utcrew.jpg";
import gs from "./assets/images/gs.jpg";
import contempo from "./assets/images/contempo.jpg";
import mail from "./assets/images/mail.svg";
import danse from "./assets/images/danse.jpg";
import danse2 from "./assets/images/danse_2.jpg";
import navette from "./assets/images/shuttle.svg";
import vin from "./assets/images/vin.svg";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import cursor from "./assets/images/pointinghand_100160.svg";

function App() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Déclenche l'animation en alternant true/false
      setAnimate((prev) => !prev);
    }, 1000); // 10000 ms = 10 secondes

    // Nettoyage de l'intervalle lors du démontage
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="flex flex-col gap-2 h-[70vh] w-full font-parklane items-center justify-between bgpicture " id="top">
        <nav className="w-full h-15 flex justify-between fixed px-5 py-2 text-2xl bg-gradient-to-b from-black/70 to-transparent z-50 ">
          <a
            href="#"
            className=" gradient-text"
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById("top");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Cabaret
          </a>
          <div className="gap-8 md:flex  hidden">
            <a
              href="#"
              className="text-white"
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById("artists-section");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Les artistes
            </a>
            <a
              href="#"
              className="text-white"
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById("Shotgun");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Le Shotgun
            </a>
            <a
              href="#"
              className="text-white"
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById("menu");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Le Menu
            </a>
          </div>
        </nav>
        <div className="h-20"></div>
        <div className="font-parklane items-center gradient-text flex justify-center flex-col">
          <h2 className="text-5xl">Le</h2>
          <h1 className="md:text-8xl text-7xl">Cabaret</h1>
          <img src={vector} className=" md:max-w-[400px] max-w-[300px]" />
          <h2 className="md:text-xl text-base">jeudi 21 novembre de 19h45 à 00h30</h2>
        </div>
        <div className="h-40"></div>
      </div>
      <div className="flex flex-col gap-28">
        <div className="flex flex-col gap-2  w-full p-6 items-center  border-t-2 border-orange-300 " id="artists-section">
          <div className="w-full flex justify-between">
            <img src={leftcorner} className=" md:w-40 md:h-40 w-20 h-20" />
            <img src={leftcorner} className="md:w-40 md:h-40 w-20 h-20 rotate-90" />
          </div>
          <h1 className="relative md:top-[-90px] top-[-60px]  text-orange-400 gradient-text  md:text-5xl text-4xl">Les artistes</h1>
          <img src={vector} className=" md:max-w-[300px] max-w-[250px] relative md:top-[-90px] top-[-70px]" />

          <div className="grid lg:grid-cols-2 justify-center md:w-3/4 w-5/6 grid-cols-1 gap-12">
            <div className="w-full flex justify-center">
              <div className="w-5/6 flex text-white items-center">
                <Carousel>
                  <CarouselContent>
                    <CarouselItem>
                      <img src={gs} />
                    </CarouselItem>
                    <CarouselItem>
                      <img src={utcrew} />
                    </CarouselItem>
                    <CarouselItem>
                      <img src={contempo} />
                    </CarouselItem>
                    {/* <CarouselItem>
                    <img src={danse} />
                  </CarouselItem> */}
                    <CarouselItem>
                      <img src={danse2} />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="text-white" variant={"default"} />
                  <CarouselNext className=" text-white" variant={"default"} />
                </Carousel>
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <div className="md:w-3/4 w-5/6 text-gray-300 font-vintage text-xl ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel scelerisque lacus, vitae feugiat mi. Ut suscipit leo enim. Aenean vitae semper sem, vel blandit neque. Cras elementum mi
                nec mauris posuere dignissim in ac nunc. Etiam condimentum lacus massa, nec efficitur nisi semper sed. Proin lacus purus, malesuada in ornare nec, semper in sapien. Proin condimentum
                lorem consectetur, dictum justo sit amet, tincidunt ex.
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center h-full" id="Shotgun">
          <img src={separator} className=" w-48" />
        </div>
        <div className="flex flex-col gap-2  w-full p-6 items-center ">
          <div className="w-full flex flex-col items-center font-vintage mb-10">
            <AlertDialog>
              <AlertDialogTrigger className={`bg-transparent flex flex-col gap-2 items-center hover:translate-y-[-0.5rem] duration-200 `}>
                <img src={cursor} className={`md:h-12 relative md:left-52 md:top-28 h-8 left-32 top-20 rotate-[-30deg] ${animate ? "shake-animation" : ""}`} />
                <h1 className="flex text-orange-400 gradient-text underline md:text-8xl text-6xl">Shotgun</h1>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-primary">Shotgun</AlertDialogTitle>
                  <AlertDialogDescription>Es-tu sur de vouloir être redirigé à la page du shotgun</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="text-white">Non</AlertDialogCancel>
                  <a href="https://stats.sheepesports.com/">
                    <AlertDialogAction>Oui</AlertDialogAction>
                  </a>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
        <div className="w-full flex justify-center h-full">
          <img src={separator} className=" w-48" />
        </div>
        <div className="flex flex-col gap-2  w-full p-6 items-center relative -top-4">
          <img src={navette} className="w-10 navette-animation relative top-4" alt="Navette" />

          <h1 className="  text-orange-400 gradient-text underline text-5xl">Les navettes</h1>
          <img src={vector} className=" max-w-[300px] mb-12 " />
          <div className="grid lg:grid-cols-1 justify-center md:w-3/4 w-5/6 grid-cols-1 gap-12 ">
            <div className="w-full flex justify-center items-center">
              <div className="md:w-3/4 w-5/6 text-gray-300 font-vintage text-xl ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel scelerisque lacus, vitae feugiat mi. Ut suscipit leo enim. Aenean vitae semper sem, vel blandit neque. Cras elementum mi
                nec mauris posuere dignissim in ac nunc. Etiam condimentum lacus massa, nec efficitur nisi semper sed. Proin lacus purus, malesuada in ornare nec, semper in sapien. Proin condimentum
                lorem consectetur, dictum justo sit amet, tincidunt ex.
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center h-full  0"></div>
        <div className="flex flex-col w-full border-y-2 border-orange-30 relative">
          <div className="tables absolute inset-0 filte blur-md"></div>
          <div className=" flex flex-col w-full items-center relative z-10 my-36 gap-24">
            <div className="flex flex-col w-full items-center">
              <div className="flex justify-center items-center">
                <h1 className="gradient-text  text-5xl" id="menu">
                  Le Menu
                </h1>
                <img src={vin} className={`w-12  ${animate ? "shake-animation" : ""}`} />
              </div>

              <img src={vector} className=" max-w-[220px] " />
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 w-full lg:gap-0 gap-5">
              <div className="flex w-full justify-center items-center text-white">
                <div className="md:w-3/4 w-5/6 md:h-[328px] h-[238px] flex flex-col items-center bg-black/50 shadow-2xl">
                  <div className="flex w-full justify-between">
                    <img src={leftcorner} className=" md:w-40 md:h-40 w-20 h-20" />
                    <img src={leftcorner} className="md:w-40 md:h-40 w-20 h-20 rotate-90" />
                  </div>
                  <div className=" relative md:-top-28 -top-14 font-parklane  gradient-text w-full flex flex-col md:gap-7 gap-4">
                    <h2 className="text-3xl text-center ">Végétarien</h2>
                    <div className=" text-xl ml-20 text-white font-parkside">
                      <ul className="flex flex-col gap-2">
                        <li>Entrée :</li>
                        <li>Plat :</li>
                        <li>Boisson :</li>
                        <li>Dessert :</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex w-full justify-between relative md:-top-48 -top-28">
                    <img src={leftcorner} className=" md:w-40 md:h-40 w-20 h-20 -rotate-90" />
                    <img src={leftcorner} className="md:w-40 md:h-40 w-20 h-20 -rotate-180" />
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-center items-center text-white">
                <div className="md:w-3/4 w-5/6 md:h-[328px] h-[238px] flex flex-col items-center bg-black/50 shadow-2xl">
                  <div className="flex w-full justify-between">
                    <img src={leftcorner} className=" md:w-40 md:h-40 w-20 h-20" />
                    <img src={leftcorner} className="md:w-40 md:h-40 w-20 h-20 rotate-90" />
                  </div>
                  <div className=" relative md:-top-28 -top-14 font-parklane  gradient-text w-full flex flex-col md:gap-7 gap-4">
                    <h2 className="text-3xl text-center ">Non végétarien</h2>
                    <div className=" text-xl ml-20 text-white font-parkside">
                      <ul className="flex flex-col gap-2">
                        <li>Entrée :</li>
                        <li>Plat :</li>
                        <li>Boisson :</li>
                        <li>Dessert :</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex w-full justify-between relative md:-top-48 -top-28">
                    <img src={leftcorner} className=" md:w-40 md:h-40 w-20 h-20 -rotate-90" />
                    <img src={leftcorner} className="md:w-40 md:h-40 w-20 h-20 -rotate-180" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2  w-full p-6 justify-between h-52">
          <div className="w-full flex justify-center items-center font-parklane gradient-text md:text-2xl text-base">
            <img src={mail} className="w-10 pr-3 fadeinout " /> Contact :
            <a href="mailto:cabaret@assos.utc.fr" className=" hover:translate-y-[-0.5rem] gradient-text duration-200 pl-3">
              cabaret@assos.utc.fr
            </a>
          </div>
          <div className="w-full flex flex-col items-center font-parklane  gradient-text justify-center text-center">Site créé par Antonio Godoy Pellini pour l'association "Le Cabaret A24"</div>
        </div>
      </div>
    </>
  );
}

export default App;
