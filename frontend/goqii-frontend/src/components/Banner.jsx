import { useState } from "react";

const packageList = [
  { name: "Fitness Plan", item_id: 101, shortname: "fitness" },
  { name: "Wellness Program", item_id: 102, shortname: "wellness" },
  { name: "Diabetes Care", item_id: 103, shortname: "diabetes" },
  { name: "Heart Health", item_id: 104, shortname: "heart" },
];

export default function Banner() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const match = packageList.find(
      (pkg) => pkg.name.toLowerCase() === query.trim().toLowerCase()
    );
    if (match) {
      window.location.href = ``;
    } else {
      alert("Please type the full package name exactly as shown.");
    }
  };

  return (
    <>
  
      <style>{`
        .banner-wrapper {
          width: 100%;
          background: linear-gradient(90deg, #00897B, #004D40);
          color: white;
          padding: 40px 20px;
          box-sizing: border-box;
        }
        .banner {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .banner-text {
          flex: 1;
          min-width: 280px;
        }
        .banner-text h1 {
          font-size: 34px;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .banner-text h2 {
          font-size: 22px;
          font-weight: 400;
          margin-bottom: 20px;
        }
        .banner-text p {
          font-size: 16px;
          margin-bottom: 20px;
        }
        .search-box {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: center;
        }
        .search-box input {
          padding: 14px 20px;
          border-radius: 40px;
          border: none;
          font-size: 16px;
          flex: 1;
          min-width: 250px;
          outline: none;
        }
        .search-box button {
          padding: 14px 30px;
          border-radius: 40px;
          background: #FFEB3B;
          color: #000;
          border: none;
          font-weight: 600;
          cursor: pointer;
        }
        .banner-image {
          flex: 1;
          min-width: 280px;
          text-align: center;
        }
        .banner-image img {
          max-width: 100%;
          border-radius: 12px;
        }
        @media (max-width: 768px) {
          .banner {
            flex-direction: column;
            text-align: center;
          }
          .banner-image {
            display: none;
          }
          .search-box {
            flex-direction: column;
            align-items: stretch;
          }
          .search-box input,
          .search-box button {
            width: 100%;
          }
          .banner-text h1 {
            font-size: 26px;
          }
          .banner-text h2 {
            font-size: 18px;
          }
          .banner-text p {
            font-size: 15px;
          }
        }
      `}</style>


      <div className="banner-wrapper">
        <div className="banner">
          <div className="banner-text">
            <h1>Empower Your Health with GOQii</h1>
            <h2>Explore curated wellness programs</h2>
            <p>
              Book health checkups, fitness coaching, and wellness journeys backed by experts.
            </p>
            <div className="search-box">
              <input
                type="text"
                placeholder="Type full package name..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button onClick={handleSearch}>Search</button>
            </div>
          </div>

          <div className="banner-image">
            <img
              src="https://img.freepik.com/free-vector/many-medical-equipments-medicine-white-background_1308-43339.jpg?t=st=1747649895~exp=1747653495~hmac=f15d2d7353272522fa4b585e4282f1d20c1ae32a13f7745895a7aebbd764898b&w=1380"
              alt="Medical Equipment"
            />
          </div>
        </div>
      </div>
    </>
  );
}
