import React from "react";
import Led from "./Led";
import Screen from "./Screen";

const range = (start, end, step) => {
  return Array.from(
    { length: Math.ceil((end - start) / step) },
    (e, x) => start + x * step
  );
};
const colours = {
  blue: ["#005dc3", "#0066c3", "#aec5ff"],
  red: ["#a30000", "#8e0000", "#f3c9c9"],
  green: ["#275214", "#214611", "#c3d5bb"],
};

const Clock = () => {
  const numberOfCircles = 56;
  const arrayOfCircles = Array.from({ length: 8 }, (x) =>
    range(1, Math.floor(numberOfCircles / 8), 1)
  );
  // console.log(arrayOfCircles);

  return (
    <table>
      <tbody>
        {arrayOfCircles.map((arrOut, i) => {
          return (
            <React.Fragment key={`frag_${i}`}>
              <tr key={`row_${i}`}>
                {arrOut.map((arrIn, j) => {
                  return (
                    <>
                      <td key={`cell_${i}${j}`}>
                        {j === 0 && i === 0 && (
                          <Screen className="inner_wrap" />
                        )}
                        <Led
                          key={`led_${i}${j}`}
                          colours={
                            j % 2 === 0 ? colours["green"] : colours["blue"]
                          }
                          radColourIds={`${i}${j}`}
                        />
                      </td>
                    </>
                  );
                })}
              </tr>
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
};

export default Clock;
