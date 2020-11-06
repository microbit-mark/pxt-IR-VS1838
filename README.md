
[![Build Status](https://travis-ci.org/1010Technologies/pxt-makerbit-ir-receiver.svg?branch=master)](https://travis-ci.org/1010Technologies/pxt-makerbit-ir-receiver)

MakeCode extension for Keyestudio Infrared Wireless Module Kit. The extension should also work with other with IR receivers and NEC compatible IR remotes.

## MakerBit Board

The MakerBit connects to the BBC micro:bit to provide easy connections to a wide variety of sensors, actuators and other components.
Lorem Ipsum.

http://makerbit.com/

| ![MakerBit](https://github.com/1010Technologies/pxt-makerbit/raw/master/MakerBit.png "MakerBit") | ![MakerBit+R](https://github.com/1010Technologies/pxt-makerbit/raw/master/MakerBit+R.png "MakerBit+R") |
| :----------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------: |
|                                            _MakerBit_                                            |                                   _MakerBit+R with motor controller_                                   |

# Documentation
> Open this page at [https://github.com/BrickHackers/pxt-IR-VS1838](https://github.com/BrickHackers/pxt-IR-VS1838)

## Use as Extension
This repository can be added as an extension in MakeCode.
* open https://makecode.microbit.org/
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/BrickHackers/pxt-IR-VS1838** and import the IR VS1838 extension


## irVS1838.connectIrReceiver

Connects to the IR receiver module at the specified pin.

```sig
irVS1838.connectIrReceiver(DigitalPin.P0)
```

### Parameters

- `pin` - digital pin with an attached IR receiver

## irVS1838.onIrButton

Do something when a specific button is pressed or released on the remote control.

```sig
irVS1838.onIrButton(IrButton.Ok, IrButtonAction.Pressed, () => {})
```

### Parameters

- `button` - the button to be checked
- `action`- the trigger action
- `handler` - body code to run when the event is raised

## irVS1838.irButton

Returns the code of the IR button that was pressed last. Returns -1 (IrButton.Any) if no button has been pressed yet.

```sig
irVS1838.irButton()
```

## irVS1838.onIrDatagram

Do something when a specific button is pressed or released on the remote control.

```sig
irVS1838.onIrDatagram(() => {})
```

### Parameters

- `handler` - body code to run when the event is raised

## irVS1838.irDatagram

Returns the IR datagram as 32-bit hexadecimal string. The last received datagram is returned or "0x00000000" if no data has been received yet.

```sig
irVS1838.irDatagram()
```

## irVS1838.wasIrDataReceived

Returns true if any IR data was received since the last call of this function. False otherwise.

```sig
irVS1838.wasIrDataReceived();
```

## irVS1838.irButtonCode

Returns the command code of a specific IR button.

```sig
irVS1838.irButtonCode(IrButton.Num9)
```

### Parameters

- `button` - the button

## MakeCode Example

```blocks
irVS1838.connectIrReceiver(DigitalPin.P0,)

irVS1838.onIrButton(IrButton.Ok, IrButtonAction.Released, function () {
    basic.showIcon(IconNames.SmallHeart)
})

irVS1838.onIrButton(IrButton.Ok, IrButtonAction.Pressed, function () {
    basic.showIcon(IconNames.Heart)
})

basic.forever(function () {
    if (irVS1838.wasAnyIrButtonPressed()) {
        basic.showNumber(irVS1838.irButton())
    }
})

```

## License

Licensed under the MIT License (MIT). See LICENSE file for more details.

## Supported targets

- for PXT/microbit
- for PXT/calliope
