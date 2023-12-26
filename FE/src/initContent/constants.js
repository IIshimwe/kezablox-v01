export const mapping = [
  { name: 'start', setup: '', loop: '' },
  {
    name: 'wait',
    setup: `pinMode(13, OUTPUT);`,
    loop: `digitalWrite(13, HIGH);`,
  },
  {
    name: 'turn_led_on',
    setup: `pinMode(13, OUTPUT);`,
    loop: `digitalWrite(13, HIGH);`,
  },
  {
    name: 'highorlow',
    setup: `pinMode(13, OUTPUT);`,
    loop: `digitalWrite(13, HIGH);`,
  },
  {
    name: 'turn_led_off',
    setup: `pinMode(13, OUTPUT);`,
    loop: `digitalWrite(13, LOW);`,
  },
];
