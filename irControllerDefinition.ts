// Definiton of IR Controller's buttons

const enum IrButton {
  //% block="1"
  Num1 = 0xa2,
  //% block="2"
  Num2 = 0x62,
  //% block="3"
  Num3 = 0xe2,
  //% block="4"
  Num4 = 0x22,
  //% block="5"
  Num5 = 0x02,
  //% block="6"
  Num6 = 0xc2,
  //% block="7"
  Num7 = 0xe0,
  //% block="8"
  Num8 = 0xa8,
  //% block="9"
  Num9 = 0x90,
  //% block="⁎"
  Star = 0x68,
  //% block="0"
  Num0 = 0x98,
  //% block="#"
  Hash = 0xb0,
  //% block=" "
  Unused_1 = 0x30,
  //% block="△"
  Up = 0x18,
  //% block=" "
  Unused_2 = 0x7a,
  //% block="◁"
  Right = 0x10,
  //% block="OK"
  OK = 0x38,
  //% block="▷"
  Left = 0x5a,
  //% block=" "
  Unused_3 = 0x42,
  //% block="▽"
  Number_0 = 0x4a,
  //% block=" "
  Unused_4 = 0x52,
  //% block="any"
  Any = -1,
}