import Line from "./Line";
function List(){
    return(
        <>
            <h2 className="mb-24 mt-24 text-5xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">ESP32-S3 Specifications</h2>
            <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400 text-center">
                <Line content="Dual-core Xtensa LX7 CPU, up to 240 MHz, and supporting single-precision FPU"></Line>
                <Line content="Wi-Fi 2.4 GHz (IEEE 802.11 b/g/n)"></Line>
                <Line content="Added instructions to accelerate machine learning applications"></Line>
                <Line content="512 KiB SRAM, 384 KiB ROM, and 16 KiB RTC SRAM"></Line>
                <Line content="Capable of connecting to external PSRAM and Flash via Quad SPI or Octal SPI, and share the same 32 MiB address space"></Line>
                <Line content="Ultra-low power RISC-V (RV32IMC) coprocessor clocked at 17.5 MHz approximately"></Line>
                <Line content="Ultra-low power FSM coprocessor similar to previous ESP32 and ESP32-S2"></Line>
                <Line content="Wi-Fi 2.4 GHz (IEEE 802.11 b/g/n)"></Line>
                <Line content="Bluetooth 5 (LE)"></Line>
                <Line content="45 programmable GPIOs"></Line>
                <Line content="No integrated ethernet MAC"></Line>
                <Line content="2 × 12-bit SAR ADCs, up to 20 channels"></Line>
                <Line content="USB OTG"></Line>
            </ul>
        </>
    )
}

export default List;
