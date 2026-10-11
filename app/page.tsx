const PRICE_DATE = "2026-10-11";

const nav = [
  ["building", "What you are building"],
  ["parts", "Parts list"],
  ["plumbing", "Plumbing"],
  ["wiring", "Wiring"],
  ["controller", "Controller"],
  ["first-run", "First-run tests"],
  ["warnings", "Warnings"],
  ["add-a-pot", "Add a pot"],
  ["places", "Shelf, sill, balcony, greenhouse"],
  ["trouble", "Troubleshooting"],
];

const parts: Array<{
  qty: string;
  name: string;
  href?: string;
  role: string;
  each: string;
  line: string;
  unknown?: boolean;
}> = [
  {
    qty: "1",
    name: "Raspberry Pi 5, 2 GB",
    href: "https://www.raspberrypi.com/products/raspberry-pi-5/",
    role: "Controller. A watering program fits in 2 GB. The 1 GB board was still listed at $45 on the October 2026 price post. Buy 4 GB only if you already want a camera or a heavy dashboard.",
    each: "$77.50",
    line: "$77.50",
  },
  {
    qty: "1",
    name: "Official 27 W USB-C supply, Adafruit 5814",
    href: "https://www.adafruit.com/product/5814",
    role: "Pi only. It does not also feed the pumps.",
    each: "$14.04",
    line: "$14.04",
  },
  {
    qty: "1",
    name: "Adafruit 352, 12 V 5 A supply",
    href: "https://www.adafruit.com/product/352",
    role: "Pump rail. UL listed, 5.5 / 2.1 mm barrel, 100–240 V input. The 1 A brick (Adafruit 798) is too small for four pumps.",
    each: "$24.95",
    line: "$24.95",
  },
  {
    qty: "4",
    name: "Adafruit 1150 peristaltic pump",
    href: "https://www.adafruit.com/product/1150",
    role: "One pump per pot. 12 V, 200–300 mA, up to 100 mL/min, self-primes about half a meter.",
    each: "$24.95",
    line: "$99.80",
  },
  {
    qty: "4",
    name: "Adafruit 3190 DRV8871 driver",
    href: "https://www.adafruit.com/product/3190",
    role: "Switches one pump. 3.3 V logic inputs, motor supply 6.5–45 V. A cheaper substitute is the IRLB8721 (Adafruit 355, $2.25 list, out of stock on the fetch day) plus a flyback diode.",
    each: "$7.50",
    line: "$30.00",
  },
  {
    qty: "1",
    name: "Adafruit 755, 1N4001 diodes, pack of 10",
    href: "https://www.adafruit.com/product/755",
    role: "Flyback diode, 1 A. Optional on a DRV8871, required if you switch the pump with a discrete MOSFET. The 1150’s 300 mA sits inside 1 A.",
    each: "$1.50",
    line: "$1.50",
  },
  {
    qty: "4",
    name: "Adafruit 4026 STEMMA soil sensor",
    href: "https://www.adafruit.com/product/4026",
    role: "Capacitive I2C moisture, one per pot. Four address settings fill one bus.",
    each: "$7.50",
    line: "$30.00",
  },
  {
    qty: "1",
    name: "Adafruit 4566 AHT20",
    href: "https://www.adafruit.com/product/4566",
    role: "Room temperature and humidity. One sensor, in the air, I2C address 0x38.",
    each: "$4.50",
    line: "$4.50",
  },
  {
    qty: "1",
    name: "Adafruit 4681 BH1750",
    href: "https://www.adafruit.com/product/4681",
    role: "Light. Useful if the schedule should care about daylight. It saturates in full sun. Included in the known subtotal.",
    each: "$4.50",
    line: "$4.50",
  },
  {
    qty: "1",
    name: "Adafruit 4965 leak detector",
    href: "https://www.adafruit.com/product/4965",
    role: "Wet/dry alarm in the spill tray. The traces are sacrificial if they sit in a puddle.",
    each: "$1.95",
    line: "$1.95",
  },
  {
    qty: "1",
    name: "Food-grade HDPE reservoir",
    href: "https://epackagesupply.com/products/white-5-gallon-90-mil-food-grade-bucket-with-plastic-handle-1-count",
    role: "Opaque, lidded, a few litres for four pots. The fetched price is a 5-gallon pail, SKU E100598, which is the documented stand-in and is larger than this kit needs. A 1–2 gallon food-grade jug price was not fetched.",
    each: "$4.83",
    line: "$4.83",
  },
  {
    qty: "4",
    name: "Silicone extension, same measured ID as the pump tube",
    role: "Only if the included half-meter leads are short. The tube shipped on the 1150 is for testing the pump and is not FDA or USDA rated.",
    each: "unknown",
    line: "unknown",
    unknown: true,
  },
  {
    qty: "1",
    name: "Low-water sensor (optional)",
    href: "https://www.adafruit.com/product/3397",
    role: "Optomax 3397 (Adafruit) is a point sensor at $39.95. Its dry output can sit at the supply voltage, and the listed minimum supply is 4.5 V, so a 5 V output must not land on a Pi GPIO. A stick-on SEN0204 price was not fetched.",
    each: "$39.95 optional",
    line: "optional",
    unknown: true,
  },
  {
    qty: "1",
    name: "Fuse and holder on the 12 V lead",
    role: "At the supply, rated above the normal load and at or below the wire and supply rating.",
    each: "unknown",
    line: "unknown",
    unknown: true,
  },
  {
    qty: "4",
    name: "Clips for about 4 mm tube",
    role: "Hold the tube at the soil. Rain Bird TS25 / TS-025 stakes are the wrong size for this tube.",
    each: "unknown",
    line: "unknown",
    unknown: true,
  },
];

const alsoUnknown = [
  "A spill tray that can hold the full reservoir, with margin.",
  "A microSD card for Raspberry Pi OS.",
  "STEMMA QT / JST-PH cables for the soil sensors, the AHT20, and the BH1750.",
  "A ventilated box for the Pi and the drivers, tall enough that it cannot flood.",
  "A 2-pin connector or screw terminal for each pump’s bare leads. A specific JST part number was not fetched.",
  "Food-contact silicone of the measured inside diameter, if the pots are edible herbs. A McMaster SKU was not fetched. Adafruit points at McMaster and says the included tube is not FDA.",
  "A clamp for each silicone-to-barb joint. Silicone stretches off an unclamped barb.",
];

const warnings = [
  "Plug the power supplies into a GFCI-protected outlet if there is any chance of water nearby, including a covered patio, and test that GFCI every month.",
  "Use a listed power adapter and keep household mains wiring out of any box you build; do not cut, splice, or extend the mains side yourself.",
  "If you use an extension cord outdoors, use one marked for outdoor use, keep the connection dry, and form a drip loop so water drips off the cord before it reaches a plug or a box.",
  "Mount the Raspberry Pi, the relay, and both power supplies above the highest level a spill can reach, outside the plant tray.",
  "Use an enclosure suited to the room or patio, and do not drill a listed weatherproof box unless the fitting instructions say the rating still holds.",
  "The pump must be off, and any valve must be closed, when power is removed or the Pi is rebooting.",
  "Use a normally closed valve, and do not let the reservoir siphon into the pots when the pump is off.",
  "A relay can stick on. Give the pump a maximum run time that does not depend on a program still running, and keep a single dose small relative to the reservoir.",
  "Do not use a cheap active-low relay board that turns the pump on while the Pi is booting, crashed, or unplugged. If the pump runs during a power-cycle test, the build is not safe to leave alone.",
  "Stop the pump when the reservoir is empty, and follow the pump manual about dry running.",
  "Put a tray under the pots and the reservoir that can hold the full reservoir if a tube pops off, and keep that water away from outlets and cords.",
  "For edible herbs, use tubing and a reservoir with a real food-contact or potable-water listing, and do not drink the reservoir water.",
  "This build is plain water only. Do not put nutrient concentrates, acids, bleach, pesticides, or fertilizer injectors in the system.",
  "Too much water kills plants. Start with a small amount, do not water on a blind schedule, and make a missing sensor mean “do not water.”",
  "Drain the pump, valves, and tubes before freezing weather, and do not leave the system running where water can freeze.",
  "Keep the reservoir out of direct sun, covered and opaque, and refresh the water so it does not sit and grow algae.",
  "On a patio or outdoors, skip watering when it is raining, and make a broken rain sensor skip watering rather than allow it.",
  "Power the Raspberry Pi from the official supply for that model, into its normal power connector. Do not back-power it through the GPIO header or a USB hub.",
  "Do not connect a pump or valve coil to a GPIO pin. Give the pump its own listed supply and a driver that can handle an inductive load.",
  "Before you leave the system unattended, test boot, reboot, a killed program, a pulled tube, and an empty reservoir, with the water going into a tray, not into the plants.",
];

const tests = [
  "Leave the service disabled while you wire. Unplug the 12 V supply. Boot the Pi. Nothing should run.",
  "Plug in the 12 V supply with every pump tube aimed into a measuring jug inside the tray. Cold power-on, before the program starts. The pumps stay still.",
  "Enable the service. At the login prompt, before you open any page, the pumps are still off.",
  "Reboot. The pumps stay off. A run that was in progress is logged as aborted and is not continued.",
  "Stop the service, and also kill the process if you can. The pumps go off and stay off. When systemd restarts the service, its first act is still “all outputs off.”",
  "Pull the Pi’s USB-C plug while the 12 V supply stays on. The pumps stay off. If a pump spins in this step, unplug the 12 V supply from dry floor and fix the driver before you continue.",
  "Ask for a manual run of a few seconds into the jug. Weigh the water. Write that pump’s real millilitres per minute on a card. “Up to 100 mL/min” is the catalog ceiling, not your pump’s number.",
  "Pull the network cable in the middle of a run. The dose still ends, because the deadline lives on the Pi.",
  "With the pumps allowed to run, pull a tube off on purpose. The tray holds the water. The Pi, both supplies, and the drivers stay dry. You can reach both plugs without putting a hand in the tray.",
  "Empty the reservoir on purpose into the tray. The pump stops. It does not sit and buzz.",
  "Unplug one soil sensor, or wait until its reading is older than the max age. That plant is skipped. A missing reading is never treated as dry.",
  "Only after every check above, aim a tube at soil. Set a small daily budget and confirm the next request is refused when the budget is spent.",
];

export default function Page() {
  return (
    <>
      <a className="skip" href="#building">
        Skip to the guide
      </a>
      <header className="top">
        <div className="top-inner">
          <p className="kicker">Bench guide · four pots · plain water</p>
          <h1>See-the-sip</h1>
          <p className="deck">
            A Raspberry Pi 5, four 12&nbsp;V peristaltic pumps, and a lidded
            HDPE jug. You buy the parts, plumb the tubes, and prove the pumps
            stay off before you leave the shelf alone.
          </p>
        </div>
      </header>

      <div className="shell">
        <nav className="toc" aria-label="On this page">
          {nav.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>

        <main>
          <section id="building">
            <h2>What you are building</h2>
            <p className="lead">
              Four pots, each with its own pump, so a fern and a cactus do not
              have to share a dose. The Pi decides when a named plant is
              thirsty. Water moves only while that pump is powered. This page
              is the instruction sheet. The Pi is the controller. If this
              website is down, the plants still follow the program on the Pi,
              and they never get water because a page failed to say stop.
            </p>
            <figure>
              <img
                src="/images/hero-shelf.png"
                alt="Four labeled pots on a sunny wooden shelf, sitting in a cream spill tray, with watering tubes and a small bottle among them."
                width={1280}
                height={720}
              />
              <figcaption>
                Mood of the finished shelf: named pots, a tray that can catch a
                leak, tubes you can watch. The small bottle standing in the
                tray is a prop. The reservoir you buy is the opaque food-grade
                HDPE jug in the parts list, with a lid and a vent. Power bricks
                in the photograph are only a hint that the supplies sit up on
                the sill, above the tray. Follow the wiring section for which
                two adapters, and where the Pi actually goes.
              </figcaption>
            </figure>
            <p>On the bench, the kit is:</p>
            <ul className="plain">
              <li>
                A Raspberry Pi 5 on its own official 5&nbsp;V USB-C supply
                (the 27&nbsp;W brick, Adafruit 5814).
              </li>
              <li>
                Four Adafruit 1150 peristaltic pumps, one per pot, on a
                separate listed 12&nbsp;V 5&nbsp;A supply (Adafruit 352).
              </li>
              <li>
                One DRV8871 motor driver per pump, and a 1N4001 flyback diode
                in the kit. The diode is required if you use a MOSFET instead
                of the DRV8871.
              </li>
              <li>
                Four capacitive STEMMA soil sensors. No bare metal probes in
                the soil.
              </li>
              <li>
                Clear silicone from each pump to the soil surface, cut to the
                pump’s measured tube size, and a way to unplug that pump’s two
                wires when you move the pot.
              </li>
              <li>
                A food-grade HDPE reservoir with a lid, and a spill tray that
                can hold the whole jug if a tube pops off.
              </li>
              <li>Plain water only. Pumps fail off.</li>
            </ul>
            <div className="stop">
              <strong>Leave these out of the first build.</strong> No household
              mains wiring inside a box you make. No solenoid on a still
              reservoir (a pilot valve such as Adafruit 997 needs about 3&nbsp;psi
              and will not open on a quiet jug). No nutrient injector, no
              acid, no fertilizer pump. The priced parts for this indoor kit
              come to <strong>$293.57</strong> before the unknown rows, tax,
              and shipping. Prices below were fetched on {PRICE_DATE}.
            </div>
            <h3>Order of work</h3>
            <ol className="steps">
              <li>Buy the parts. Mark anything listed as unknown and price it yourself.</li>
              <li>Set the tray, the jug, and the tubes with both supplies unplugged.</li>
              <li>Wire the low-voltage side. A GPIO pin never drives a pump.</li>
              <li>Install one Python service. On boot it forces every pump off.</li>
              <li>Run the first-run tests into a jug, in the tray.</li>
              <li>Read the warnings. Only then leave the shelf unattended.</li>
            </ol>
          </section>

          <section id="parts">
            <h2>Parts list</h2>
            <p>
              Quantities are for four pots on one Pi. “Listed price” is the
              shelf price on the linked page on {PRICE_DATE}, in USD, not a
              street survey. <strong>Unknown</strong> means that pass did not
              find a price or a part number. Check the live page before you
              pay. Tax and shipping are not included.
            </p>
            <div className="table-wrap">
              <table>
                <caption>Buy list for four indoor pots. Prices {PRICE_DATE}.</caption>
                <thead>
                  <tr>
                    <th>Qty</th>
                    <th>Part</th>
                    <th>What it is for</th>
                    <th className="num">Each</th>
                    <th className="num">Line</th>
                  </tr>
                </thead>
                <tbody>
                  {parts.map((row) => (
                    <tr key={row.name} className={row.unknown ? "unknown" : undefined}>
                      <td>{row.qty}</td>
                      <td>
                        {row.href ? (
                          <a href={row.href} rel="noreferrer" target="_blank">
                            {row.name}
                          </a>
                        ) : (
                          row.name
                        )}
                      </td>
                      <td>{row.role}</td>
                      <td className="num">{row.each}</td>
                      <td className={`num${row.unknown ? " unknown" : ""}`}>{row.line}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="sum">
              <strong>Known subtotal, excluding the optional Optomax: $293.57.</strong>{" "}
              Add the Optomax and the same rows come to $333.52. A 4&nbsp;GB
              Pi 5 in place of the 2&nbsp;GB is the chained official figure of
              $110 on {PRICE_DATE}, which adds $32.50. Silicone extension, fuse,
              clips, and every row below are extra.
            </div>
            <h3>Also on the bench, price unknown</h3>
            <ul className="plain">
              {alsoUnknown.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>Do not substitute these</h3>
            <ul className="plain">
              <li>
                Resistive soil probes (YL-69 / SEN0114). DC through the soil
                eats the metal, and fertilizer looks like water.
              </li>
              <li>
                A DFRobot SEN0193 as the sensor you trust while you are away.
                It is analog, the Pi has no analog input, and the coating that
                protects the copper wears through.
              </li>
              <li>DHT11 or DHT22. Use the AHT20. A second, filtered sensor is the SHT31-D (Adafruit 2857, $13.95) if you want one later.</li>
              <li>
                Adafruit 4546 or 4547 submersible pumps as the system pump.
                They are 3&nbsp;V desk toys, with no life rating, and Adafruit
                says they are not for drinking water.
              </li>
              <li>
                A pressure-compensating dripper such as the Rain Bird XB10PC on
                a 1150. Those emitters want 15–50&nbsp;psi. At peristaltic
                pressure the emitter is a plug. The dose is an open tube end
                and a timed run.
              </li>
            </ul>
          </section>

          <section id="plumbing">
            <h2>Plumbing</h2>
            <p>
              One pump, one tube, one pot. There is no shared wet header to
              drain, and there is no valve on the jug. The 1150 squeezes its
              own tube, so the pump body never touches the water. When the
              motor stops, the rollers pinch that tube.
            </p>
            <figure>
              <img
                src="/images/plumbing.png"
                alt="Build diagram: a lidded jug, four peristaltic pumps on a wooden rail, clear tubes, a fitting labeled quick-disconnect, and four pots in a metal tray."
                width={1280}
                height={720}
              />
              <figcaption>
                The map: reservoir, four peristaltic pumps on a rail above the
                tray, silicone tube, a pull-apart joint, the open end in the
                soil, and a tray under all of it. Buy an opaque HDPE jug. The
                jug in the picture is drawn see-through so you can see that it
                holds water. The red fitting is the idea of a joint you can
                separate. The plumbing steps say which joint actually seals.
                The open tube end in the soil is the outlet. Do not add a
                pressure-compensating emitter there.
              </figcaption>
            </figure>
            <ol className="steps">
              <li>
                Put the spill tray on the shelf first. Every pot sits in it.
                The jug sits in that tray or in a second tray. Together they
                must hold the full reservoir if an outlet tube pops off at the
                plants while the jug’s own tray stays dry. Keep the outlets
                away from cords and the hallway.
              </li>
              <li>
                Use an opaque food-grade HDPE jug with a lid, a few litres,
                not the 5-gallon pail unless that is the size you actually
                want. Leave a vent so the pump cannot collapse a sealed jug,
                and point the vent so overflow cannot reach the electronics.
                Keep the lid on so leaves and fungus gnats stay out. Keep the
                jug out of direct sun. Refresh the water. When film appears,
                clean the jug and the tubes. This page has no bleach or
                algaecide step.
              </li>
              <li>
                Set the jug on the same shelf as the pots, not on a shelf
                above them. Fill it, leave the pumps off for an hour, and
                watch the level. If it drops, the line is siphoning. Raise a
                loop of tube above the waterline before it falls to the pot,
                and test again. A stopped 1150 pinches its tube. That pinch is
                the shutoff this kit has. There is no solenoid on this
                reservoir.
              </li>
              <li>
                Mount the four pumps on a rail above the tray, dry, where a
                leak cannot pool around the motor. The fluid stays inside the
                silicone.
              </li>
              <li>
                Measure the tube that is actually installed. Adafruit says the
                size has changed and quotes about 4&nbsp;mm outside diameter
                and 2&nbsp;mm inside diameter. Two half-meter pieces and
                barbed connectors come in the box. Cut square. If you need a
                longer run, add silicone of that same measured inside
                diameter. For edible herbs, replace the included tube: Adafruit
                is explicit that it is not sterile and not FDA or USDA
                compliant. Keep the maker’s food-contact statement with the
                replacement. Do not drink the reservoir water either way.
              </li>
              <li>
                Push the tube fully onto the barbs that came with the pump,
                and clamp it. Silicone stretches and walks off an unclamped
                barb. A clamp part number was not fetched (unknown).
              </li>
              <li>
                Run each tube to the soil surface and hold it with a small
                clip that fits about 4&nbsp;mm tube. Rain Bird TS-025 stakes
                start around 0.22&nbsp;in outside diameter. This silicone is
                about 0.16&nbsp;in, so those stakes will not grip it. Clip
                price: unknown.
              </li>
              <li>
                The disconnect on this kit is electrical. Each pump’s two bare
                leads land on a screw terminal or a 2-pin plug you can pull.
                A specific connector part number was not fetched (unknown).
                Moving a pot means moving that pump, its tube, and its soil
                sensor as a set.
              </li>
              <li>
                Do not push this silicone into a John Guest collet. The teeth
                do not bite soft tube, the tube goes oval, and the O-ring
                never sees a round outside diameter. A true dry-break coupling
                (both sides shut as they separate) was not priced. A CPC /
                Colder part number and price are unknown. If you later hang
                several pots off one pressurized pump, the documented stack on
                1/4&nbsp;in OD LLDPE is a John Guest PPSV040808W shutoff
                (close it, then pull; shelf price unknown), then a PI0408S
                union ($1.69 at Webstaurant on {PRICE_DATE}). That is a
                different wet side. It is not this silicone.
              </li>
              <li>
                Weigh one timed run into a cup and write the number on that
                pump. A houseplant sip of 50–200&nbsp;mL is a few tens of
                seconds at the catalog flow. Your measured flow is the one
                the controller uses. No duty-cycle percent, tube-life hours,
                or decibel figure was published for the 1150. Short runs are
                the use. Leaving it on for hours wears the tube.
              </li>
            </ol>
          </section>

          <section id="wiring">
            <h2>Safe low-voltage wiring</h2>
            <p>
              Two listed adapters, and nothing else on the mains. The Pi’s
              brick and the pump brick plug into a GFCI-protected outlet. The
              box you build contains only the low-voltage side: 5&nbsp;V into
              the Pi’s USB-C, 12&nbsp;V into the drivers, and 3.3&nbsp;V logic
              from the header to those drivers.
            </p>
            <div className="stop">
              <strong>A GPIO pin is a 3.3&nbsp;V logic pad.</strong> Raspberry
              Pi’s GPIO page says not to connect a motor to a GPIO pin. The
              header’s 5&nbsp;V pins are the Pi’s own supply, not a pump rail.
              A 1150 wants 12&nbsp;V at 200–300&nbsp;mA. A GPIO pad has neither
              that voltage nor that current, and the motor’s turn-off spike
              will punch the pad. Never a GPIO pin driving a pump.
            </div>
            <ol className="steps">
              <li>
                Confirm the outlet is GFCI-protected before you plug in. That
                includes a covered patio, a damp room, and anywhere a spill or
                spray can reach the outlet. If it is not protected, use a
                listed portable GFCI (UL, ETL, or equivalent) or have a
                qualified electrician install one. An unlisted cord sold as a
                GFCI is not a substitute. Test monthly: plug in a lamp, press
                TEST, confirm the lamp goes out, press RESET, confirm power
                returns. If TEST does not drop power, stop using that outlet
                until it is fixed.
              </li>
              <li>
                Form a drip loop on every cord before it rises into a plug, a
                power supply, or the enclosure. The low point of the cable is
                below the entry, so water on the jacket drips off instead of
                running into the connector. Keep plugs out of puddles and off
                the floor. This is water-shedding practice for this project.
                It is not a claim that a service-entrance wiring rule applies
                to a Pi cable.
              </li>
              <li>
                Mount the Pi, the four DRV8871 boards, and both power supplies
                above the highest level a failure can make: the reservoir, a
                full tray, and a popped tube all emptied onto the shelf. A box
                sitting in the plant tray fails that test. Do not put a power
                strip in the tray. Do not run cords along the bottom of a
                cabinet under the pots. You should be able to unplug both
                supplies from dry floor. Label the 12&nbsp;V plug. That pull
                is the emergency stop.
              </li>
              <li>
                Indoors, away from spray, a ventilated box that keeps fingers
                and dripping water off the board is enough, provided it cannot
                flood. A food-storage tub with holes drilled in it is not a
                weatherproof enclosure. On a patio, use a listed
                weather-appropriate enclosure, keep it out of direct sun, and
                do not drill it unless the fitting instructions say the rating
                still holds. Shade the box. A sealed box in the sun can cook
                the Pi even when the air is mild.
              </li>
              <li>
                Power the Pi only from the official 27&nbsp;W USB-C supply,
                into the USB-C socket. Do not back-power the board through the
                GPIO header or a USB hub. Do not open either brick, cut a
                cord, or splice to a lamp cord. Household mains stays inside
                the factory adapters. If the patio needs a new receptacle or a
                permanent GFCI, that work is for a qualified electrician. An
                outdoor extension cord, if you need one at all, must be marked
                for outdoor use, kept dry, used as a temporary lead, and not
                daisy-chained as the permanent supply.
              </li>
              <li>
                The Adafruit 352 feeds only the pumps. Put a fuse in the
                12&nbsp;V positive lead at the supply. Holder part number:
                unknown. Choose a fuse above the normal load and at or below
                what the wire and the 5&nbsp;A supply can carry. Run one or
                two pumps at a time. Four 1150s at 300&nbsp;mA are 1.2&nbsp;A
                if they ever overlap, which the brick can feed and which this
                guide still avoids.
              </li>
              <li>
                For each pump, follow the DRV8871 page (Adafruit 3190) for
                terminal names. Motor power comes from the 12&nbsp;V rail. The
                Pi GPIO drives only the logic input. Hold the unused input in
                the driver’s off state so the pump turns one way, toward the
                pot. The 1150 is reversible. Join logic ground and motor
                ground the way that board’s guide shows, so the 3.3&nbsp;V
                signal has a return. Shared ground is not permission for
                12&nbsp;V to touch a GPIO, the 3.3&nbsp;V pin, or the 5&nbsp;V
                pin.
              </li>
              <li>
                Flyback diode: the DRV8871’s H-bridge recirculates motor
                current, so a separate diode is optional on that board. If you
                use an IRLB8721 low-side MOSFET instead, put a 1N4001 across
                the motor, at the motor. Cathode (the band) goes to the
                +12&nbsp;V side. Anode goes to the MOSFET drain. A reversed
                diode is a short across the supply. The 1N4001 is a 1&nbsp;A
                diode. It covers this 300&nbsp;mA pump. It does not cover a
                bigger coil.
              </li>
              <li>
                Do not use a cheap active-low 5&nbsp;V relay board as the
                switch. Many of those boards turn on while the Pi is booting,
                crashed, or unplugged, because the off command is “drive this
                pin high from Python.” The off condition has to be the
                condition the hardware sits in with the Pi resetting or
                powered off. The DRV8871 is the driver in this kit because its
                inputs are specified for 3.3&nbsp;V. Still prove it with the
                power-cycle tests before any tube aims at a plant. This guide
                does not assign a pump to a pin.
              </li>
              <li>
                On the Pi, run <code>pinout</code> and trust that printout.
                Keep pumps off GPIO 0, 1, 2, 3, 14, and 15. GPIO 2 and 3 are
                the I2C bus: use them for the soil sensors, the AHT20, and the
                BH1750, not for a motor. Pi 5 header pins come from the RP1.
                A published per-pin power-on pull table for that chip was not
                found, so do not copy a Pi 4 high/low map onto this board. An
                external resistor in the safe direction, sized so it wins
                against the Pi’s weak internal pull and does not overload the
                pad, belongs on the logic line. The power-cycle test is the
                check that matters.
              </li>
              <li>
                Set the four 4026 address jumpers so all four differ. A fifth
                soil sensor needs an I2C multiplexer. Adafruit’s TCA9548A
                breakout is the usual part. Its SKU and price were not fetched
                (unknown). Confirm the listing before you buy. The AHT20 at
                0x38 and the BH1750 can share the bus with the four soil
                sensors. Calibrate each soil sensor in that pot’s mix. The
                number runs roughly from 200 (dry) to 2000 (wet) and is not
                volumetric water content out of the box. Keep the sensor
                electronics out of the soil.
              </li>
              <li>
                Put the 4965 in the tray where a leak will reach it, and keep
                its cable climbing to the dry box. A wet reading latches every
                pump off until a person dries the tray and resets the halt.
                Drying alone must not start the pumps again.
              </li>
            </ol>
          </section>

          <section id="controller">
            <h2>Controller</h2>
            <p>
              One local Python 3 service on the Pi, started by systemd at
              boot, <code>Restart=on-failure</code>. It is the only program
              that touches the driver pins. A cron line, a second script, and
              this website do not. Raspberry Pi OS 64-bit is the system to
              install. As of this guide’s research date ({PRICE_DATE}), the
              current major release is Trixie. Use Raspberry Pi Imager, put
              your user in the <code>gpio</code> group, and enable network
              time. <code>gpiozero</code> ships with the OS. On a Pi 5, if the
              default pin factory fails, set <code>GPIOZERO_PIN_FACTORY=lgpio</code>.
              Classic <code>RPi.GPIO</code> does not support the Pi 5.
            </p>
            <h3>What the service does</h3>
            <ul className="plain">
              <li>
                On start it reads a config file a person edits. It refuses to
                start if two plants share a BCM number, if a max runtime is
                missing, or if <code>active_high</code> is missing. Guessing
                the polarity is how a pump turns on.
              </li>
              <li>
                Its next act is to force every output off. If the state file
                says a run was in progress, it marks that run aborted. It does
                not finish “the remaining seconds” after a reboot, a crash, or
                a power loss.
              </li>
              <li>
                Each plant has a name and a thirst preset: thirsty herb
                (basil, mint), woody herb (rosemary, thyme, sage), succulent,
                or seedling. The preset is a starting guess for the moisture
                floor, the sip size, and a season rule (succulents rest in
                winter and never sit in a saucer). You nudge the numbers after
                you calibrate that pot. The pump obeys the numbers, not a
                personality.
              </li>
              <li>
                A run starts only when the latest moisture reading is fresher
                than the max age, below that plant’s threshold, and past a
                cooldown. A missing, stale, or out-of-range sensor means do
                not water. It does not mean “dry.”
              </li>
              <li>
                Every run has a max runtime in seconds, enforced in the
                service with a monotonic deadline (<code>time.monotonic()</code>),
                not a <code>sleep</code> you hope finishes. Weather, the
                moisture math, and a manual “water now” can only shorten or
                reach that cap. They cannot raise it. The manual button is
                still refused when the jug is empty or the tray is wet.
              </li>
              <li>
                Choose the cap from your cup test and from what the tray can
                hold. Do not copy a universal “10 minutes.” At the catalog
                100&nbsp;mL/min, eight hours is about 48&nbsp;litres. Worked
                example, not a default: a 30-second run that weighs 40&nbsp;g
                is 80&nbsp;mL/min, so a 100&nbsp;mL sip is 75&nbsp;seconds.
                Write your own measurement into <code>max_seconds</code>.
              </li>
              <li>
                A daily budget in seconds is stored on disk and survives a
                restart, so crashing the service cannot reset it. One plant
                runs at a time.
              </li>
              <li>
                Quiet hours block automatic starts. They do not extend a run
                that already started, and they do not stop it. The deadline
                does. An empty reservoir stops the pump. A leak latches the
                system off until a person resets it.
              </li>
              <li>
                The program limit does not cover a driver that sticks on. Give
                the pump a hardware time limit that drops the 12&nbsp;V feed,
                longer than a normal sip and shorter than emptying the jug on
                the floor. A timer-module part number was not fetched
                (unknown). Until that limit is in the circuit, stay in the
                room, and keep the labeled 12&nbsp;V plug within reach of dry
                floor.
              </li>
            </ul>
            <h3>A config shape, not a program</h3>
            <p>
              Fill the GPIO numbers from <code>pinout</code> on your board
              after you have chosen pins that idle off. This block has no pin
              numbers on purpose.
            </p>
            <pre>{`# /home/pi/see-the-sip/plants.toml
# Restart the service after you edit this. Do not resume a run.

quiet_start = "22:00"
quiet_end = "07:00"

[[plant]]
id = "basil"
name = "Basil"
preset = "thirsty-herb"      # guess, then calibrate in this pot
# gpio = <BCM from pinout>
active_high = true           # required; the service will not guess
max_seconds = 0              # replace with your cup-test sip
daily_budget_seconds = 0    # small, and stored across restarts
moisture_below = 0           # between that pot's dry and wet readings
max_reading_age_seconds = 3600
cooldown_seconds = 14400`}</pre>
            <p>
              A small page served by the same process, on the LAN, can show
              each plant’s name, the age of its reading, the last sip, and a
              timed water-now button. Closing the laptop must not be what
              stops the pump. Do not forward that page to the internet. Home
              Assistant is optional and, if you add it later, may only ask the
              Pi for a timed run. The Pi still ends the run when an “off”
              message never arrives.
            </p>
            <p>
              Open-Meteo on the Pi may skip or shorten an automatic run. It
              must not raise <code>max_seconds</code>. If the fetch fails, the
              normal schedule still runs, inside the cap and the daily budget.
              Indoor shelves and windowsills ignore the outdoor rain forecast.
              A balcony or greenhouse honors rain and freezing weather. Credit
              the forecast if you show it: weather data by{" "}
              <a href="https://open-meteo.com/" rel="noreferrer" target="_blank">
                Open-Meteo.com
              </a>
              , CC BY 4.0.
            </p>
          </section>

          <section id="first-run">
            <h2>First-run tests</h2>
            <p>
              Do these before a tube points at a plant, and again after any
              wiring change. Water goes into a measuring jug inside the tray.
              If a pump runs during a power-cycle test, the build is not safe
              to leave alone.
            </p>
            <ol className="checks">
              {tests.map((step) => (
                <li key={step}>
                  <label>
                    <input type="checkbox" />
                    <span>{step}</span>
                  </label>
                </li>
              ))}
            </ol>
          </section>

          <section id="warnings">
            <h2>Warnings</h2>
            <p>
              These sentences are the safety rules for this build. Read them
              before the first unattended day. Local electrical rules decide
              whether your outlet is already protected. This page does not
              quote a numbered electrical code as your obligation. If you are
              unsure, ask a qualified electrician.
            </p>
            <ol className="warnings">
              {warnings.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ol>
            <h3>Check on your own bench</h3>
            <ul className="plain">
              <li>Whether that outlet is GFCI-protected, and whether a new outdoor receptacle is yours to add.</li>
              <li>The 1150 page for voltage, current, and the tube you actually measure, and the DRV8871 page for its terminals.</li>
              <li>The food-contact listing and temperature limits printed on the tube and the jug you bought.</li>
              <li>The Pi 5 power and GPIO notes in the current Raspberry Pi documentation, plus the power-cycle test above.</li>
              <li>Whether the balcony freezes or takes wind-driven rain. If it does, drain-down and rain-skip are required.</li>
            </ul>
          </section>

          <section id="add-a-pot">
            <h2>Add a pot</h2>
            <p>
              A fifth plant is another pump module, not a tee in the existing
              silicone. The four 4026 sensors already use the four I2C
              addresses, so a fifth moisture sensor waits on a multiplexer
              (TCA9548A is the usual Adafruit part; SKU and price unknown).
            </p>
            <ol className="steps">
              <li>Set the new pot in the tray.</li>
              <li>
                Add one Adafruit 1150, one DRV8871, silicone of the measured
                inside diameter, a clamp, and a clip. Land the pump leads on
                their own unplug-able connector.
              </li>
              <li>
                In the config, give the plant a name, a preset, its own BCM
                pin from <code>pinout</code>, <code>active_high</code>, and a
                max runtime from a cup test. Two plants must not share a pin.
              </li>
              <li>
                A short test sip into a cup, with you watching the tube. If
                the tube stays empty, fix the fitting before you leave the
                house.
              </li>
              <li>
                If this pot gets a probe, write down the dry reading now and
                the wet reading after the first real watering. Until then the
                service treats a missing calibration the same as a stale
                sensor: it does not water on a guess.
              </li>
              <li>
                Keep one pump running at a time. To take the pot to another
                shelf, unplug its connector and move the pump, the tube, and
                the sensor together.
              </li>
            </ol>
          </section>

          <section id="places">
            <h2>The same kit, four places</h2>
            <p>
              The hardware list stays the four pumps, the Pi, the HDPE jug,
              and the tray. The rules change. Four 1150s dose pots by time.
              They do not become a patio of 15&nbsp;psi drip emitters. That
              would be a different pump and normally closed valves, and it is
              a later project.
            </p>
            <div className="cards">
              <article className="card">
                <h3>Indoor shelf</h3>
                <p>
                  Ignore the outdoor rain forecast. A morning sip can be a
                  clock time. The leak tray is mandatory. Keep clear silicone
                  runs short so you can see the water move, and keep the jug
                  opaque and lidded.
                </p>
              </article>
              <article className="card">
                <h3>Windowsill</h3>
                <p>
                  Same parts, often a smaller jug and fewer pots if the sill
                  is short. A sip near local sunrise is a good default. The
                  sill is still indoors: do not skip watering because a
                  forecast says the street is wet. Keep the jug and the Pi out
                  of the sun. Long clear tubes in a bright window grow algae
                  in the water that feeds herbs, so keep those runs short.
                </p>
              </article>
              <article className="card">
                <h3>Covered balcony</h3>
                <p>
                  A roof does not make this a dry room. GFCI, an in-use cover
                  if a plug stays outdoors, drip loops, and a listed enclosure
                  out of the sun. Skip watering when it rains or when a freeze
                  is possible. A broken or missing rain reading skips. It does
                  not allow watering. Use black UV-stable tube only for a run
                  that is actually in the sun, and only if it matches the
                  pump’s measured size. Before the first freeze, drain the
                  jug, pumps, and tubes, and bring the Pi and both supplies
                  indoors. This kit is not heated. Point leaks away from the
                  door and the outlet.
                </p>
              </article>
              <article className="card">
                <h3>Small greenhouse</h3>
                <p>
                  Same pots and the same pumps. The AHT20 you already bought
                  tells the service the air is hot, so a warm afternoon does
                  not water soil that is still moist. A stale soil reading
                  still means do not water. Shade the electronics. No vents,
                  heaters, CO2, nutrient injector, or acid dosing in this
                  guide. Drain before a freeze, the same as the balcony.
                </p>
              </article>
            </div>
          </section>

          <section id="trouble">
            <h2>Troubleshooting</h2>
            <div className="table-wrap">
              <table className="trouble">
                <caption>What you see, and what to check.</caption>
                <thead>
                  <tr>
                    <th>What you see</th>
                    <th>What to do</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Driver clicks or the service says “on,” and no water moves</td>
                    <td>
                      The tube is out of the pump head, kinked, or not cut
                      square. The jug is empty. The 1150 is reversible, so
                      confirm flow is toward the pot. There is no valve on
                      this jug to be backwards.
                    </td>
                  </tr>
                  <tr>
                    <td>Water moves as soon as the 12&nbsp;V supply is plugged in</td>
                    <td>
                      The driver is on with the Pi idle. Unplug the 12&nbsp;V
                      brick from dry floor. Do not “fix” it by starting the
                      script sooner. Change the pin, the polarity, and the
                      external resistor so a floating input leaves the pump
                      off, then repeat the power-cycle tests.
                    </td>
                  </tr>
                  <tr>
                    <td>A pump runs while the Pi’s USB-C lead is unplugged</td>
                    <td>
                      12&nbsp;V is reaching the motor without a commanded
                      driver. That wiring is not safe to leave. Unplug the
                      pump supply.
                    </td>
                  </tr>
                  <tr>
                    <td>The soil number always looks dry, or never updates</td>
                    <td>
                      Check the STEMMA cable and the address jumpers. Two
                      sensors on one address will misread. The service must
                      skip that plant. A disconnected probe is not a request
                      for water.
                    </td>
                  </tr>
                  <tr>
                    <td>A plant wilts after the kit has been running</td>
                    <td>
                      Wilt can mean too much water. Empty the tray. Pots must
                      not sit in a puddle. Shorten the sip and raise the
                      moisture floor. Succulents are not on the basil preset.
                    </td>
                  </tr>
                  <tr>
                    <td>Green film in the jug or the clear tube</td>
                    <td>
                      The jug is in the light, or the water has sat. Move it
                      out of the sun, keep the lid on, empty and refill, and
                      clean the film. Do not add a chemical flush from this
                      page.
                    </td>
                  </tr>
                  <tr>
                    <td>A push-fit joint weeps, or will not hold</td>
                    <td>
                      Soft silicone or vinyl is in a collet made for round
                      1/4&nbsp;in OD LLDPE. That pairing does not seal. Recut
                      a barbed joint by taking about 10&nbsp;mm off a stretched
                      tube end, keep the cut square, and push it fully onto
                      the barb.
                    </td>
                  </tr>
                  <tr>
                    <td>The Pi shows a low-voltage warning, or GPIO behavior looks random</td>
                    <td>
                      Use the official 27&nbsp;W supply and its captive cable.
                      A phone charger is the wrong brick. The pump supply
                      stays on its own adapter. Low voltage can corrupt the
                      card, and a confused pin must not be what enables a
                      pump.
                    </td>
                  </tr>
                  <tr>
                    <td>The service restarts in a loop</td>
                    <td>
                      The config is incomplete or two plants share a pin. Fix
                      the file. Outputs stay off while it is unhappy. Logs are
                      in <code>journalctl -u</code> for whatever unit name you
                      gave the service.
                    </td>
                  </tr>
                  <tr>
                    <td>The dashboard or this website is down</td>
                    <td>
                      The plants should still be on the local schedule. This
                      page cannot start or stop a pump. If the Pi itself is
                      off, the pumps must be off too.
                    </td>
                  </tr>
                  <tr>
                    <td>You added a pilot solenoid and it never opens</td>
                    <td>
                      Expected on a still jug. Adafruit 997 needs about
                      3&nbsp;psi. This kit does not use that valve. Pull it
                      back out.
                    </td>
                  </tr>
                  <tr>
                    <td>The GFCI will not reset, or TEST does nothing</td>
                    <td>Stop using that outlet until it is repaired.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
      <footer>
        <p>
          Shelf prices fetched {PRICE_DATE}. Where a figure was missing, the
          guide says unknown. The photographs show the mood and the layout.
          The parts, the tube size, and the warnings override a picture when
          they disagree. The Raspberry Pi on your shelf is the controller.
        </p>
      </footer>
    </>
  );
}
