import RestaurantNavBar from "../components/RestaurantNavBar";
import Menu from "../components/Menu";
function RestaurantMenuPage() {
  return (
    <>
      {/* DESCRIPTION PORTION */}
    
        <div className="bg-white w-[100%] rounded p-3 shadow">
          <RestaurantNavBar />
          <Menu />
        </div>

    </>
  );
}

export default RestaurantMenuPage;
