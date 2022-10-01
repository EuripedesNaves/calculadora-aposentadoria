import React, { forwardRef, useRef } from "react";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";

const ComponentToPrint = forwardRef((props, ref) => {
  return <div ref={ref}>Resultado com Gráfico</div>;
});

export const Print = () => {
  const ref = useRef();

  return (
    <div>
      <ReactToPrint content={() => ref.current}>
        <PrintContextConsumer>
          {({ handlePrint }) => (
            <button onClick={handlePrint}>Imprimir</button>
          )}
        </PrintContextConsumer>
      </ReactToPrint>
      <ComponentToPrint ref={ref} />
    </div>
  );
}