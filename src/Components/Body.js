import React from "react";
import eth from "../Assets/eth.png";

const Body = () => {
  return (
    <div>
      <div id="dropdown">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Market Snapshot
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body p-0">
                <ul class="list-group">
                  <li class="list-group-item d-flex justify-content-between">
                    <div>Market Cap :</div>
                    <div>Sachin</div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between">
                    <div>Exchange Vol :</div>
                    <div>Sachin</div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between">
                    <div>Assets :</div>
                    <div>Sachin</div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between">
                    <div>Exchanges :</div>
                    <div>Sachin</div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between">
                    <div>Markets :</div>
                    <div>Sachin</div>
                  </li>
                  <li class="list-group-item d-flex justify-content-between">
                    <div>BTC Dom Index :</div>
                    <div>Sachin</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="banner">
        <div id="stats" className="mx-auto ">
          <div id="stat1" className="mx-auto mt-2">
            <div className="bannerTextH">Market Cap</div>
            <div className="bannerTextC">2.07%</div>
          </div>
          <div id="stat2" className="mx-auto mt-2">
            <div className="bannerTextH">Market Cap</div>
            <div className="bannerTextC">2.07%</div>
          </div>
          <div id="stat3" className="mx-auto mt-2">
            <div className="bannerTextH">Market Cap</div>
            <div className="bannerTextC">2.07%</div>
          </div>
          <div id="stat4" className="mx-auto mt-2">
            <div className="bannerTextH">Market Cap</div>
            <div className="bannerTextC">2.07%</div>
          </div>
          <div id="stat5" className="mx-auto mt-2">
            <div className="bannerTextH">Market Cap</div>
            <div className="bannerTextC">2.07%</div>
          </div>
          <div id="stat6" className="mx-auto mt-2">
            <div className="bannerTextH">Market Cap</div>
            <div className="bannerTextC">2.07%</div>
          </div>
        </div>
      </div>

      <div id="table" className="">
        <table class="table ">
          <thead>
            <tr>
              <th scope="col" id="rank" style={{ textAlign: "center" }}>
                Rank
              </th>
              <th scope="col" className="ps-2" style={{ textAlign: "left" }}>
                Name
              </th>
              <th scope="col">Price</th>
              <th scope="col" className="hideCol2">
                Market Cap
              </th>
              <th scope="col" className="hideCol1">
                VWAP(24Hrs)
              </th>
              <th scope="col" className="hideCol1">
                Supply
              </th>
              <th scope="col" className="hideCol2">
                Volume(24Hrs)
              </th>
              <th scope="col">Change(24Hrs)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th
                scope="row"
                className="col-1 align-middle"
                style={{ textAlign: "center" }}
              >
                1
              </th>
              <td
                className=" d-flex justify-content-left"
                style={{ textAlign: "left" }}
              >
                <div className="my-auto mx-1">
                  <img
                    className=""
                    src={eth}
                    style={{ height: "35px" }}
                    alt=""
                  />
                </div>
                <div className="my-auto">
                  <div className="coinName">Etherium</div>
                  <div className="coinCode">ETH</div>
                </div>
              </td>
              <td className="td align-middle">$35,953.71</td>
              <td className="td align-middle hideCol2">$683.95b</td>
              <td className="td align-middle hideCol1">$37,843.56</td>
              <td className="td align-middle hideCol1">19.03m </td>
              <td className="td align-middle hideCol2">$16.97b </td>
              <td className="td align-middle">-9.77%</td>
            </tr>
            <tr>
              <th
                scope="row"
                className="col-1 align-middle"
                style={{ textAlign: "center" }}
              >
                1
              </th>
              <td
                className=" d-flex justify-content-left"
                style={{ textAlign: "left" }}
              >
                <div className="my-auto mx-1">
                  <img
                    className=""
                    src={eth}
                    style={{ height: "35px" }}
                    alt=""
                  />
                </div>
                <div className="my-auto">
                  <div className="coinName">Etherium</div>
                  <div className="coinCode">ETH</div>
                </div>
              </td>
              <td className="td align-middle">$35,953.71</td>
              <td className="td align-middle hideCol2">$683.95b</td>
              <td className="td align-middle hideCol1">$37,843.56</td>
              <td className="td align-middle hideCol1">19.03m </td>
              <td className="td align-middle hideCol2">$16.97b </td>
              <td className="td align-middle">-9.77%</td>
            </tr>
            <tr>
              <th
                scope="row"
                className="col-1 align-middle"
                style={{ textAlign: "center" }}
              >
                1
              </th>
              <td
                className=" d-flex justify-content-left"
                style={{ textAlign: "left" }}
              >
                <div className="my-auto mx-1">
                  <img
                    className=""
                    src={eth}
                    style={{ height: "35px" }}
                    alt=""
                  />
                </div>
                <div className="my-auto">
                  <div className="coinName">Etherium</div>
                  <div className="coinCode">ETH</div>
                </div>
              </td>
              <td className="td align-middle">$35,953.71</td>
              <td className="td align-middle hideCol2">$683.95b</td>
              <td className="td align-middle hideCol1">$37,843.56</td>
              <td className="td align-middle hideCol1">19.03m </td>
              <td className="td align-middle hideCol2">$16.97b </td>
              <td className="td align-middle">-9.77%</td>
            </tr>
            <tr>
              <th
                scope="row"
                className="col-1 align-middle"
                style={{ textAlign: "center" }}
              >
                1
              </th>
              <td
                className=" d-flex justify-content-left"
                style={{ textAlign: "left" }}
              >
                <div className="my-auto mx-1">
                  <img
                    className=""
                    src={eth}
                    style={{ height: "35px" }}
                    alt=""
                  />
                </div>
                <div className="my-auto">
                  <div className="coinName">Etherium</div>
                  <div className="coinCode">ETH</div>
                </div>
              </td>
              <td className="td align-middle">$35,953.71</td>
              <td className="td align-middle hideCol2">$683.95b</td>
              <td className="td align-middle hideCol1">$37,843.56</td>
              <td className="td align-middle hideCol1">19.03m </td>
              <td className="td align-middle hideCol2">$16.97b </td>
              <td className="td align-middle">-9.77%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Body;
