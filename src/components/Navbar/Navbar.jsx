import MobLinks from "../MobLinks/MobLinks";
import NavLinks from "../NavLinks/NavLinks";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const handleMenu = () => {
    document.querySelector(".MobMenu").classList.toggle("hidden");
    // document.querySelector("body").classList.add("overflow-y-hidden");
  };

  const handleLinkClick = () => {
    document.querySelector("body").classList.remove("overflow-y-hidden");
  };

  return (
    <>
      <div className="bg-[#242d5e9c] h-14 mt-8 p-2 flex justify-center items-center rounded-full sticky max-md:hidden">
        <NavLinks />
      </div>
      <div className="NavMenu min-md:hidden w-[90%] m-4">
        <button onClick={handleMenu} className="z-13">
          <MenuIcon />
        </button>
        <div className="MobMenu hidden">
          {/* <div className="close">
            <button onClick={handleClose}>
              <CloseIcon />
            </button>
          </div> */}
          <MobLinks onClick={handleLinkClick} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
