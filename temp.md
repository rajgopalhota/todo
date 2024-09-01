## **CO1: Basic Concepts of Electrochemistry**

### **1. Introduction to Electrochemistry**
Electrochemistry is a phenomenon that establishes the relationship between chemistry and electricity. It involves the study of chemical reactions that produce electrical energy and vice versa.

### **2. Electrode Potential**

#### **2.1 Single Electrode Potential**
- **Definition:**  
  The potential developed at the interface between a metal and its ionic solution when the metal is immersed in a solution containing its own ions. It is denoted as **E**.

- **Origin of Electrode Potential:**  
  When a metal (M) is dipped into a solution containing its ions (Mn⁺), two opposing processes occur:
  - **Oxidation:**  
    \( M \rightarrow Mn^+ + ne^- \)  
    The metal loses electrons and forms positive ions, leaving behind a layer of negative charges on its surface.
  
  - **Reduction:**  
    \( Mn^+ + ne^- \rightarrow M \)  
    Metal ions in the solution gain electrons and deposit as metal atoms on the metal surface.
  
  These opposite tendencies reach an equilibrium, resulting in the formation of an electric double layer (EDL), also known as the Helmholtz EDL, which gives rise to the electrode potential.

#### **2.2 Measurement of Electrode Potential**
- **Using Reference Electrodes:**  
  Electrode potentials are measured against standard reference electrodes like the Standard Hydrogen Electrode (SHE).
  
- **Example:**  
  Determining the single electrode potential of a Zinc (Zn) electrode using SHE:
  \[
  E_{\text{cell}} = E_{\text{cathode}} - E_{\text{anode}} = E_{\text{SHE}} - E_{\text{Zn}}
  \]
  Given \( E_{\text{SHE}} = 0 \) V and \( E_{\text{cell}} = 0.76 \) V,
  \[
  E_{\text{Zn}} = -0.76 \, \text{V}
  \]

- **Secondary Reference Electrodes:**  
  Electrode potentials can also be determined using secondary reference electrodes such as Calomel electrodes and Ag/AgCl electrodes.

### **3. Electrochemical Cells**

#### **3.1 Types of Electrochemical Cells**
1. **Galvanic or Voltaic Cells (Reversible):**  
   Convert chemical energy into electrical energy.  
   *Examples:* Daniel cell, Dry cell.

2. **Electrolytic Cells (Irreversible):**  
   Convert electrical energy into chemical energy.  
   *Examples:* Lead-acid battery, Nickel-cadmium battery.

#### **3.2 Electron Motive Force (EMF)**
- **Definition:**  
  The potential difference between the two electrodes of a galvanic cell that drives the flow of electrons from the electrode with lower reduction potential to the one with higher reduction potential. Denoted as **E_cell**.
  
- **Formula:**  
  \[
  E_{\text{cell}} = E_{\text{cathode}} - E_{\text{anode}}
  \]

- **Example Problem:**  
  *Calculate the EMF of a cell constructed by combining Cu and Zn electrodes dipping in their respective ionic solutions. The standard electrode potentials are \( E_{\text{Cu}} = +0.34 \) V and \( E_{\text{Zn}} = -0.76 \) V at 298 K.*

  **Solution:**
  \[
  E_{\text{cell}} = E_{\text{Cu}} - E_{\text{Zn}} = 0.34 \, \text{V} - (-0.76 \, \text{V}) = 1.10 \, \text{V}
  \]

### **4. Nernst Equation**

#### **4.1 Derivation**
For a general reversible redox reaction:
\[
Mn^+ + ne^- \leftrightarrow M
\]
The Gibbs free energy change (\( \Delta G \)) at temperature \( T \) and pressure can be related to the electrode potential.

- **Van't Hoff’s Isotherm:**
  \[
  \Delta G = \Delta G^0 + RT \ln \left( \frac{[\text{Products}]}{[\text{Reactants}]} \right)
  \]
  
- **Relation with Electrode Potential:**
  \[
  \Delta G = -nFE = \Delta G^0 + RT \ln \left( \frac{[M]}{[Mn^+]} \right)
  \]
  
  Simplifying:
  \[
  E = E^0_{\text{red}} + \frac{0.0591}{n} \log [Mn^+]
  \]
  
- **Nernst Equation:**
  \[
  E = E^0_{\text{red}} + \frac{0.0591}{n} \log C
  \]

#### **4.2 Applications of the Nernst Equation**
- Determining the electrode potential of unknown metals.
- Predicting the corrosion tendency of metals.

#### **4.3 Example Problems**
1. **Reduction Potential Calculation:**
   *Calculate the reduction potential of a Cu/Cu²⁺ electrode dipped in a 0.5 M Cu²⁺ solution at 25°C. The standard electrode potential is 0.337 V.*

   **Solution:**
   \[
   E = E^0 + \frac{0.0591}{n} \log [Cu^{2+}]
   \]
   \[
   E = 0.337 \, \text{V} + \frac{0.0591}{2} \log (0.5) = 0.3230 \, \text{V}
   \]

2. **Oxidation Potential Calculation:**
   *Find the oxidation potential of Zn/Zn²⁺ in contact with a 0.2 M Zn²⁺ solution at 25°C. The standard electrode potential is 0.763 V.*

   **Solution:**
   \[
   E = E^0 + \frac{0.0591}{n} \log [Zn^{2+}]
   \]
   \[
   E = 0.763 \, \text{V} + \frac{0.0591}{2} \log (0.2) = 0.7836 \, \text{V}
   \]

### **5. Concentration Cells**
- **Definition:**  
  Galvanic cells with identical electrodes and electrolytes but differing ion concentrations.

- **Example:**  
  *Two copper electrodes dipped in CuSO₄ solutions of concentrations M₂ (0.1 M) and M₁ (0.05 M), where M₂ > M₁.*

- **Calculation of EMF:**
  \[
  E_{\text{cell}} = \frac{0.0591}{n} \log \left( \frac{M_2}{M_1} \right)
  \]
  \[
  E_{\text{cell}} = \frac{0.0591}{2} \log \left( \frac{0.1}{0.05} \right) = 0.0591 \, \text{V}
  \]

#### **Example Problems:**
1. **Nickel Concentration Cell:**
   \[
   \text{Ni (s)} / \text{Ni}^{2+} (0.01 \, \text{M}) \, || \, \text{Ni}^{2+} (0.1 \, \text{M}) / \text{Ni (s)}
   \]
   \[
   E_{\text{cell}} = \frac{0.0591}{2} \log \left( \frac{0.1}{0.01} \right) = 0.02955 \, \text{V}
   \]

2. **Copper Concentration Cell:**
   \[
   \text{Cu (s)} / \text{Cu}^{2+} (0.05 \, \text{M}) \, || \, \text{Cu}^{2+} (5 \, \text{M}) / \text{Cu (s)}
   \]
   \[
   E_{\text{cell}} = \frac{0.0591}{2} \log \left( \frac{5}{0.05} \right) = 0.0591 \, \text{V}
   \]

### **6. Reference Electrodes and pH Determination**

#### **6.1 Types of Single Electrodes**
1. **Metal-Metal Ion Electrodes:**  
   *Examples:* Zn/Zn²⁺, Cu/Cu²⁺, Ag/Ag⁺.

2. **Metal-Metal Salt Electrodes:**  
   *Examples:* Calomel electrode (Hg/Hg₂Cl₂/Cl⁻), Silver-Silver Chloride electrode (Ag/AgCl/Cl⁻), Lead-Lead Sulphate electrode (Pb/PbSO₄/SO₄²⁻).

3. **Gas Electrodes:**  
   *Examples:* H₂ electrode (H₂/Pt/H⁺), Chlorine electrode (Pt/Cl₂/Cl⁻).

4. **Amalgam Electrodes:**  
   *Examples:* Lead amalgam electrode (Pb-Hg/Pb⁺).

5. **Oxidation-Reduction Electrodes:**  
   *Examples:* Pt/Fe²⁺, Fe³⁺; Pt/Ce³⁺, Ce⁴⁺; Pt/Sn²⁺, Sn⁴⁺.

6. **Ion Selective Electrodes:**  
   *Example:* Glass electrode.

#### **6.2 Reference Electrodes**
- **Primary Reference Electrodes:**  
  *Example:* Standard Hydrogen Electrode (SHE).

- **Secondary Reference Electrodes:**  
  *Examples:* Calomel electrode, Ag/AgCl electrode.

#### **6.3 Standard Hydrogen Electrode (SHE)**
- **Construction:**  
  Consists of platinized platinum foil fused to a glass tube. Mercury is placed at the bottom, and a copper wire is used for electrical connections. The platinum foil is immersed in a 1 M H⁺ solution, and pure hydrogen gas is bubbled at 1 atm pressure.

- **Representation:**  
  \( \text{Pt}/\text{H}_2(g)/\text{H}^+ \)

- **Limitations:**
  1. Difficult construction.
  2. Maintaining 1 M H⁺ concentration and 1 atm H₂ pressure is challenging.
  3. Platinum electrode can be poisoned by impurities.
  4. Not suitable in the presence of oxidizing agents.

#### **6.4 Calomel Electrode**
- **Construction:**  
  A glass container with mercury at the bottom, above which mercurous chloride (calomel) is placed. The container is filled with saturated KCl solution. A platinum wire is used for electrical connections.

- **Representation:**  
  \( \text{Hg(l)}/\text{Hg}_2\text{Cl}_2/\text{Saturated KCl} \)

- **Electrode Reactions:**
  - **As Anode:**  
    \( 2\text{Hg} + 2\text{Cl}^- \rightarrow \text{Hg}_2\text{Cl}_2 + 2e^- \)
  
  - **As Cathode:**  
    \( \text{Hg}_2\text{Cl}_2 + 2e^- \rightarrow 2\text{Hg} + 2\text{Cl}^- \)

- **Advantages:**  
  - Simple construction.
  - Reproducible and stable potential.
  - Widely used as a reference electrode.

#### **6.5 Silver-Silver Chloride Electrode (Ag/AgCl)**
- **Construction:**  
  Consists of a silver wire coated with AgCl, placed in a narrow glass tube filled with agar and saturated KCl solution.

- **Representation:**  
  \( \text{Ag(s)}/\text{AgCl(s)}/\text{Saturated KCl} \)

- **Electrode Reactions:**
  - **As Anode:**  
    \( \text{Ag} + \text{Cl}^- \rightarrow \text{AgCl} + e^- \)
  
  - **As Cathode:**  
    \( \text{AgCl} + e^- \rightarrow \text{Ag} + \text{Cl}^- \)

#### **6.6 Glass Electrode for pH Determination**
- **Construction:**  
  A long glass tube made of special glass (12% BaO, 6% CaO, 72% SiO₂) with a thin, delicate glass bulb filled with 0.1 M HCl and an internal Ag/AgCl reference electrode. A platinum wire is used for electrical contact.

- **Representation:**  
  \( \text{Ag}/\text{AgCl(s)}/0.1 \, \text{M HCl}/\text{Glass} \)

- **Electrode Potential Equation:**
  \[
  E_{\text{Glass}} = E^0_{\text{Glass}} + 0.0591 \log [\text{H}^+]
  \]
  \[
  E_{\text{Glass}} = E^0_{\text{Glass}} - 0.0591 \, \text{pH}
  \]

- **pH Determination Method:**
  - Combine the glass electrode with a secondary reference electrode (e.g., Calomel electrode).
  - Dip the assembly into the solution whose pH is to be determined.
  - Connect the electrodes to a potentiometer or pH meter.
  - Use the measured EMF to calculate the pH.

  **Cell Representation:**
  \[
  \text{Hg(l)}/\text{Hg}_2\text{Cl}_2/\text{Saturated KCl} \, || \, \text{Solution of unknown pH}/\text{Glass Electrode}/0.1 \, \text{M HCl}/\text{Ag}/\text{AgCl(s)}
  \]

  **EMF Calculation:**
  \[
  E_{\text{cell}} = E_{\text{Calomel}} - E_{\text{Glass}}
  \]
  \[
  E_{\text{cell}} = E_{\text{SCE}} - (E^0_{\text{Glass}} - 0.0591 \, \text{pH})
  \]
  \[
  \text{pH} = \frac{E_{\text{cell}} + E^0_{\text{Glass}} - 0.2422}{0.0591}
  \]

---

### **7. Batteries**

#### **7.1 Introduction to Batteries**
A battery is an electrochemical device consisting of one or more electrochemical cells connected in series to provide a constant voltage for portable devices. Batteries are classified into three main types:

1. **Primary Batteries:**  
   - **Definition:** Non-rechargeable; cell reactions are irreversible.  
   - **Examples:** Leclanché cell, Zn-Carbon Battery, Hg-Battery.

2. **Secondary Batteries:**  
   - **Definition:** Rechargeable; cell reactions are reversible by applying an external EMF.  
   - **Examples:** Lead-Acid Battery, Nickel-Metal Hydride (NiMH).

3. **Flow Batteries:**  
   - **Definition:** Electrolyte components flow through the cell; suitable for large-scale energy storage.  
   - **Examples:** Hydrogen-Oxygen Fuel Cell.

#### **7.2 Primary Battery: Mercury Battery**
- **Composition:**  
  Uses either pure mercury(II) oxide (HgO) or a mixture of HgO with manganese dioxide (MnO₂) as the cathode. Graphite is mixed with HgO to enhance conductivity and prevent mercury droplet formation.

- **Half-Reactions:**
  - **Cathode:**  
    \( \text{HgO} + \text{H}_2\text{O} + 2e^- \rightarrow \text{Hg} + 2\text{OH}^- \)  
    (Standard potential: +0.0977 V vs. NHE)
  
  - **Anode:**  
    \( \text{Zn} + 2\text{OH}^- \rightarrow \text{ZnO} + \text{H}_2\text{O} + 2e^- \)

- **Overall Reaction:**
  \[
  \text{Zn} + \text{HgO} \rightarrow \text{ZnO} + \text{Hg}
  \]
  
- **Characteristics:**  
  - Irreversible reactions during discharge.
  - Zinc is oxidized to zinc oxide while HgO is reduced to elemental mercury.
  - Extra HgO prevents hydrogen gas evolution at the cell's end of life.

#### **7.3 Secondary Batteries**

##### **7.3.1 Lead-Acid Battery**
- **History:**  
  Invented by Gaston Planté in 1859; the first commercially rechargeable battery.

- **Construction:**  
  Alternating layers of lead (Pb) and lead dioxide (PbO₂) plates separated by insulators, immersed in dilute sulfuric acid (H₂SO₄) solution.

- **Electrodes and Electrolyte:**
  - **Anode:** Lead (Pb) plate.
  - **Cathode:** Lead dioxide (PbO₂) plate.
  - **Electrolyte:** 25% H₂SO₄ solution.

- **Discharging Reactions:**
  - **Anode (Oxidation):**  
    \( \text{Pb} \rightarrow \text{Pb}^{2+} + 2e^- \)
  
  - **Cathode (Reduction):**  
    \( \text{PbO}_2 + 4\text{H}^+ + 2e^- \rightarrow \text{Pb}^{2+} + 2\text{H}_2\text{O} \)
  
  - **Overall Reaction:**  
    \( \text{Pb} + \text{PbO}_2 + 4\text{H}^+ + 2\text{SO}_4^{2-} \rightarrow 2\text{PbSO}_4 \downarrow + 2\text{H}_2\text{O} + \text{Energy} \, (= 2 \, \text{V}) \)
  
  **Observations:**
  - Sulfuric acid concentration decreases during discharge.
  - Both electrodes are coated with lead sulfate (PbSO₄), which acts as a protective layer.

- **Charging Reactions:**
  \[
  2\text{PbSO}_4 \downarrow + 2\text{H}_2\text{O} + \text{Energy} (> 2 \, \text{V}) \rightarrow \text{Pb} + \text{PbO}_2 + 4\text{H}^+ + 2\text{SO}_4^{2-}
  \]
  
- **Applications:**  
  Widely used as car batteries.

##### **7.3.2 Nickel-Metal Hydride (NiMH) Battery**
- **Principles of Operation:**  
  Based on the ability to absorb, release, and transport hydrogen between electrodes. Utilizes rare earth hydrogen-absorbing alloys (Misch metals) in the negative electrode for high energy density.

- **Charging Reactions:**
  - **Positive Electrode:**  
    \( \text{Ni(OH)}_2 + \text{OH}^- \rightarrow \text{NiOOH} + \text{H}_2\text{O} + e^- \)
  
  - **Negative Electrode:**  
    \( \text{M} + \text{H}_2\text{O} + e^- \rightarrow \text{MH} + \text{OH}^- \)

#### **7.4 Lithium-Ion Battery**
- **Definition:**  
  A rechargeable battery where lithium ions move from the negative electrode to the positive electrode during discharge and back during charging. Utilizes intercalated lithium compounds instead of metallic lithium.

- **Operation:**
  - **Discharge:**  
    Lithium ions (Li⁺) migrate from the anode to the cathode through the electrolyte, generating electrical current.
  
  - **Charge:**  
    An external power source forces lithium ions back to the anode.

- **Components:**
  - **Anode and Cathode:** Materials that allow lithium intercalation and deintercalation.
  - **Electrolyte:** Typically a non-aqueous solvent with lithium salts.

- **Advantages:**  
  - High energy density.
  - Lightweight.
  - Long cycle life.

#### **7.5 Fuel Cells**

##### **7.5.1 Hydrogen-Oxygen Fuel Cell**
- **Definition:**  
  A galvanic cell with a continuous supply of reactants (hydrogen and oxygen). Produces water as a byproduct, making it an eco-friendly energy source.

- **Construction:**  
  Consists of two inert porous electrodes (graphite with finely divided platinum) and an electrolyte (25% KOH solution).

- **Electrode Reactions:**
  - **Anode (Oxidation):**  
    \( 2\text{H}_2(g) + 4\text{OH}^-(aq) \rightarrow 4\text{H}_2\text{O}(l) + 4e^- \)
  
  - **Cathode (Reduction):**  
    \( \text{O}_2(g) + 2\text{H}_2\text{O}(l) + 4e^- \rightarrow 4\text{OH}^-(aq) \)
  
  - **Overall Reaction:**  
    \( 2\text{H}_2(g) + \text{O}_2(g) \rightarrow 2\text{H}_2\text{O}(l) \, + \, \text{Energy} \, (= 1.0 \, \text{V}) \)

- **Advantages:**  
  - Zero emissions (water is the only byproduct).
  - High efficiency.
  - Suitable for zero-emission vehicles.

---

## **Summary**

This instructional material covers the foundational concepts of electrochemistry, focusing on electrode potentials, electrochemical cells, the Nernst equation, reference electrodes, pH determination, and various types of batteries. Understanding these concepts is crucial for applications in energy storage, corrosion prevention, and the development of modern electronic devices.

---

## **CO2: Corrosion**
---

**INTRODUCTION**

- **Definition:** Corrosion refers to the degradation or deterioration of metal due to its reaction with the surroundings, ultimately leading to its destruction.
  
**Examples:**
  - **Rusting of Iron:** A reddish-brown scale, \( \text{Fe}_2\text{O}_3 \cdot x\text{H}_2\text{O} \), forms on the surface of iron.
  - **Formation of Green Layer on Copper:** A green layer of basic copper carbonate \( \text{CuCO}_3 + \text{Cu(OH)}_2 \) forms on the surface of copper.
  - **Tarnishing of Silver:** The blackening of the silver surface due to the formation of a black layer of silver sulfide.

**Why Study Corrosion?**
- Corrosion can lead to costly failures in plant infrastructure and machines, resulting in lost or contaminated products, environmental damage, and potential human safety risks. Assessing the conditions affecting corrosion and its rate of deterioration is crucial for making informed decisions regarding the type, cost, and urgency of remedial measures. In a modern business environment, major corrosion failures are intolerable, especially those involving personal injuries, fatalities, unscheduled shutdowns, and environmental contamination. Therefore, significant efforts are generally made to control corrosion at both the design and operational stages.

---

**CAUSES OF CORROSION**

- Metals exist in nature in combined forms, such as oxides, carbonates, and sulfides.
- A high amount of energy is required to extract the metal from ore.
- Metals are in a thermodynamically unstable state and tend to revert back to a stable state when in contact with environmental elements.

---

**CONSEQUENCES OF CORROSION**

- **Waste:** Enormous waste of machinery and different types of metallic materials.
- **Failure:** It leads to sudden failure of machines.
- **Efficiency:** Decrease in machine efficiency and frequent replacement of corroded equipment, which is expensive.
- **Accidents:** Corrosion can cause the leakage of inflammable gases from pipelines, leading to fire accidents.
- **Contamination:** Causes contamination of potable water.
- **Economic Impact:** It has been estimated that 25% of the annual world production of iron is wasted due to corrosion.

---

**THEORIES (OR) MECHANISM OF CORROSION**

**Two Theories of Corrosion:**
1. **Dry or Chemical Corrosion**
2. **Wet or Electrochemical Corrosion**

**1) Direct Chemical Attack (Or) Mechanism Of Dry Corrosion**
- Occurs due to the direct chemical action of atmospheric gases like oxygen, halogen, \( \text{H}_2\text{S} \), etc., in a dry environment on metals, forming a solid film of the corrosion product on the metal surface.
- **Oxidation Corrosion (Reaction with Oxygen):**
  - Some metals react directly with oxygen in the absence of moisture, leading to the formation of metal oxides on the surface.
  - The nature of the metal oxide layer determines the extent of further corrosion.

  **Types of Oxide Films:**
  - **Protective and Non-Porous Oxide Film:** Metals like Al, Cr, Cu, and W develop a non-porous, stable oxide film, preventing further corrosion.
  - **Unstable Oxide Film:** Metals like Au and Pt develop unstable oxide films that decompose instantly, leading to continuous corrosion.
  - **Volatile Oxide Film:** Some metals, like molybdenum, form oxides that vaporize, exposing the metal surface to further corrosion.
  - **Porous and Non-Protective Film:** Alkali and alkaline earth metals form porous oxide layers that facilitate further corrosion.

- **Pilling-Bedworth Rule:**
  - Determines the protective nature of an oxide film. The ratio of the volume of the oxide film to the volume of metal consumed indicates if the layer is protective.
  - **If the ratio is <1:** The oxide layer is porous and non-protective.
  - **If the ratio is ≥1:** The oxide layer is non-porous and protective.

- **Corrosion by Other Gases:**
  - Occurs due to the attack of gases like \( \text{Cl}_2 \), \( \text{SO}_2 \), \( \text{H}_2\text{S} \), \( \text{NO}_x \) in a dry atmosphere.
  - Corrosion products can be protective (e.g., \( \text{Ag} + \text{Cl}_2 \rightarrow \text{AgCl} \)) or non-protective (e.g., \( \text{Sn} + 2\text{Cl}_2 \rightarrow \text{SnCl}_4 \)).
  - **Hydrogen Embrittlement:** Formation of cracks and blisters on metal surfaces due to high-pressure \( \text{H}_2 \) gas.

- **Liquid Metal Corrosion:**
  - Occurs when molten metal passes through metallic pipes, dissolving solid metal or causing internal penetration.
  - Example: Liquid mercury dissolves most metals by forming amalgams, leading to corrosion.

**2) Electrochemical Corrosion (or) Wet Corrosion**
- Occurs due to the existence of separate anodic and cathodic areas, between which current flows through a conducting solution.
- **Anodic Reaction:**
  - Oxidation occurs at the anode, converting the metal into metal ions with the release of electrons.
  - Example: \( \text{Fe} \rightarrow \text{Fe}^{2+} + 2e^- \)
- **Cathodic Reaction:**
  - Reduction occurs at the cathode, which can involve the evolution of hydrogen in acidic environments or the absorption of oxygen in neutral or basic environments.

  **Wet Corrosion Example:**
  - Wet corrosion occurs in metals exposed to water, such as copper fittings on a steel pipe carrying water. The steel pipe acts as the anode, and the copper fitting as the cathode, with water serving as the electrolyte.

---

**TYPES OF CORROSION**

**1. Galvanic Corrosion:**
- Occurs when two dissimilar metals are connected in a corrosive environment, with the metal higher in the electrochemical series undergoing corrosion.
- Example: Zinc and copper form a galvanic couple, where zinc acts as the anode and corrodes, while copper acts as the cathode.
- **Prevention:** Avoid galvanic coupling, select metals closely placed in the electrochemical series, or use insulating materials between metals.

**2. Concentration Cell Corrosion (Differential Aeration Corrosion):**
- Arises due to exposure of metal to varying concentrations of electrolyte or aeration, leading to differential aeration.
- Example: Waterline corrosion occurs in metals partially immersed in water, where the area below the waterline corrodes.

**3. Pitting Corrosion:**
- Pitting occurs where there is a break in the protective layer, leading to localized accelerated attack, forming pits, cavities, and pinholes in the metal.
- Example: Impurities like sand or dust on metal surfaces can cause pitting, leading to corrosion beneath the impurity.

---

## **IMP Ques**

### 1. Nernst Equation - Derivation, Explanation, Importance

The Nernst equation is crucial in electrochemistry as it relates the reduction potential of a half-cell to the standard electrode potential, temperature, and activities of the chemical species involved. It is derived from the Gibbs free energy change and the standard electrode potential, reflecting how the cell potential changes with concentration. The equation is:

\[
E = E^\circ - \frac{RT}{nF} \ln Q
\]

where \( E \) is the cell potential, \( E^\circ \) is the standard cell potential, \( R \) is the gas constant, \( T \) is the temperature in Kelvin, \( n \) is the number of moles of electrons transferred, \( F \) is the Faraday constant, and \( Q \) is the reaction quotient. The importance of the Nernst equation lies in its ability to calculate cell potentials under non-standard conditions, predict the direction of redox reactions, and understand the behavior of electrochemical cells in real-world applications.

### 2. Measurement of EMF

The electromotive force (EMF) of an electrochemical cell is measured using a potentiometer or a voltmeter, with a high impedance to minimize current flow, ensuring the cell remains in its open-circuit condition. The standard method involves connecting the cell to the measuring device with a reference electrode, like the Standard Hydrogen Electrode (SHE), and a salt bridge to maintain ionic conduction. The EMF is the potential difference between the two electrodes when no current is drawn from the cell, reflecting the maximum potential energy the cell can provide.

### 3. Primary and Secondary Batteries Differences

Primary batteries, like alkaline and zinc-carbon cells, are non-rechargeable, providing power until their chemical reactants are exhausted. In contrast, secondary batteries, such as lithium-ion and lead-acid batteries, are rechargeable, allowing multiple cycles of charge and discharge. Primary batteries are typically used in low-drain applications like remote controls, while secondary batteries are preferred in high-drain, long-term applications like electric vehicles and portable electronics.

### 4. Advantages of Using Fuel Cells Over Traditional Batteries

Fuel cells offer several advantages over traditional batteries, such as higher energy efficiency, continuous operation as long as fuel is supplied, and lower environmental impact since they emit only water and heat when using hydrogen as fuel. Unlike batteries that store energy chemically and can suffer from limited charge cycles, fuel cells convert chemical energy directly into electrical energy, making them suitable for applications requiring long-duration power, such as in spacecraft and stationary power generation.

### 5. Construction, Working, and Applications of SHE with Suitable Examples

The Standard Hydrogen Electrode (SHE) consists of a platinum electrode in contact with 1M H\(^+\) ions and hydrogen gas at 1 atm pressure. It acts as a reference electrode with a potential defined as 0 V. In its working, hydrogen gas is bubbled through the acidic solution, and the platinum electrode facilitates the reversible redox reaction:

\[
2H^+ + 2e^- \leftrightarrow H_2(g)
\]

SHE is used as a reference in measuring the electrode potential of other half-cells, critical in determining the standard reduction potentials of different electrochemical cells.

### 6. Electrochemical Series - Definition, Explanation, and Applications/Uses

The electrochemical series is a list of elements arranged by their standard electrode potentials, measured under standard conditions. Elements with higher reduction potentials are stronger oxidizing agents, while those with lower potentials are stronger reducing agents. This series is vital in predicting the feasibility of redox reactions, determining the relative reactivity of metals, and designing electrochemical cells, corrosion protection, and galvanic series in corrosion studies.

### 7. Concentration Cells - Working Principle

Concentration cells generate electricity from the difference in concentration of the same electrolyte in two half-cells. The cell operates on the principle that electrons flow from the half-cell with lower ion concentration to the one with higher concentration, driving the system toward equilibrium. The Nernst equation is used to calculate the cell potential, which is dependent on the concentration gradient between the two half-cells.

### 8. Hydrogen-Oxygen Fuel Cell - Working, Applications

The hydrogen-oxygen fuel cell combines hydrogen and oxygen to produce water, electricity, and heat. Hydrogen is oxidized at the anode, releasing electrons, while oxygen is reduced at the cathode, combining with protons to form water. The overall reaction is:

\[
2H_2 + O_2 \rightarrow 2H_2O
\]

This fuel cell is used in various applications, including in spacecraft, where it provides both electricity and drinking water, and in vehicles as an alternative to traditional internal combustion engines.

### 9. Methanol-Oxygen Fuel Cell - Working, Applications

Methanol-oxygen fuel cells operate similarly to hydrogen-oxygen cells, but use methanol as the fuel. Methanol is oxidized at the anode, and oxygen is reduced at the cathode, producing electricity, water, and carbon dioxide:

\[
CH_3OH + \frac{3}{2}O_2 \rightarrow CO_2 + 2H_2O
\]

These cells are used in portable power sources and in scenarios where methanol’s liquid state is advantageous over hydrogen’s gaseous state, making storage and transportation easier.

### 10. Lead Acid Battery - Working, Reactions, Applications

The lead-acid battery consists of lead dioxide (PbO\(_2\)) as the cathode, lead (Pb) as the anode, and sulfuric acid (H\(_2\)SO\(_4\)) as the electrolyte. During discharge, PbO\(_2\) and Pb react with H\(_2\)SO\(_4\) to form lead sulfate (PbSO\(_4\)) and water:

\[
PbO_2 + Pb + 2H_2SO_4 \rightarrow 2PbSO_4 + 2H_2O
\]

Upon charging, the reactions are reversed. Lead-acid batteries are widely used in automotive applications due to their high surge currents and reliability.

### 11. Nickel-Metal Hydride (NiMH) Cells - Working, Reactions, Applications

NiMH cells use a nickel oxide hydroxide (NiOOH) cathode and a hydrogen-absorbing alloy anode. During discharge, the anode releases hydrogen ions, which combine with the cathode to form water:

\[
NiOOH + H_2O + e^- \rightarrow Ni(OH)_2 + OH^-
\]

These cells are used in hybrid vehicles, portable electronics, and power tools, offering higher energy density and being more environmentally friendly than nickel-cadmium batteries.

### 12. Working and Applications of Li-ion Batteries

Lithium-ion batteries use a lithium cobalt oxide (LiCoO\(_2\)) cathode and a graphite anode. During discharge, lithium ions move from the anode to the cathode, releasing energy, and the reverse occurs during charging. The overall reaction is:

\[
LiC_6 \rightarrow Li^+ + e^- + C_6
\]

Li-ion batteries are used in smartphones, laptops, electric vehicles, and grid energy storage, known for their high energy density, long cycle life, and low self-discharge.

### 13. Construction and Working of Calomel Electrodes with an Example

The calomel electrode is a reference electrode consisting of mercury in contact with a saturated solution of potassium chloride (KCl) and mercury(I) chloride (Hg\(_2\)Cl\(_2\), calomel). The electrode reaction is:

\[
Hg_2Cl_2 + 2e^- \leftrightarrow 2Hg + 2Cl^-
\]

Calomel electrodes are used in pH measurements and potentiometric titrations, providing stable and reproducible potentials.

### 14. Determination of pH of a Given Unknown Sample

The pH of an unknown sample can be determined using a pH meter or indicator solution. A pH meter measures the potential difference between a reference electrode (e.g., calomel electrode) and a glass electrode sensitive to hydrogen ions. The measured potential is converted to pH using the Nernst equation. Alternatively, pH indicators change color depending on the acidity or basicity of the solution, providing an approximate pH value.

### 15. Pitting Corrosion - Causes and Mechanism

Pitting corrosion occurs when small areas of a metal surface become anodic, leading to localized attack while the rest of the surface remains cathodic. This form of corrosion is often caused by the presence of chloride ions in the environment, which break down the protective oxide layer on the metal. The pits formed can lead to structural failure, as they concentrate stress and accelerate further corrosion.

### 16. Factors Influencing Rate of Corrosion

The rate of corrosion is influenced by factors such as the nature of the metal, the presence of protective coatings, environmental conditions (e.g., humidity, temperature), and the concentration of corrosive agents like salts and acids. Metals with higher reactivity corrode faster, while protective coatings can slow down the corrosion process. Environmental factors, such as the presence of oxygen and moisture, also play a critical role in the corrosion rate.

### 17. Wet Theory of Corrosion - Mechanisms and Effects on Materials

The wet theory of corrosion, also known as electrochemical corrosion, involves the formation of an electrochemical cell on the metal surface. In the presence of an electrolyte, anodic and cathodic regions form, leading to metal dissolution at the anode and reduction reactions at the cathode. This mechanism causes deterioration of the material, often leading to rusting in iron and steel structures.

### 18. Sacrificial An

odic Method

The sacrificial anodic method involves using a more reactive metal, such as zinc or magnesium, as a sacrificial anode to protect the structure from corrosion. The sacrificial metal corrodes instead of the protected metal, which remains intact. This method is commonly used in ship hulls, underground pipelines, and storage tanks.

### 19. Impressed Current Cathode Method

The impressed current cathodic protection (ICCP) method involves applying an external current to the metal to be protected, making it a cathode in the electrochemical cell. The current is supplied by an external power source, and an inert anode, such as graphite, is used. ICCP is widely used in large structures like pipelines, storage tanks, and offshore platforms.

### 20. Theories of Chemical and Electrochemical Corrosion

Chemical corrosion involves direct chemical reactions between the metal and environmental substances, such as oxidation in the air. Electrochemical corrosion, on the other hand, involves electrochemical reactions, often in the presence of an electrolyte, leading to the formation of anodic and cathodic regions. Examples include rusting of iron and galvanic corrosion between dissimilar metals.

### 21. Cathodic Protection Works and Illustrate the Impressed Current Method - Reactions

Cathodic protection works by making the protected metal the cathode in an electrochemical cell, either through sacrificial anodes or impressed current. In the impressed current method, an external current is applied to force electrons onto the metal surface, preventing oxidation. For example, in protecting a steel pipeline:

\[
Fe^{2+} + 2e^- \rightarrow Fe
\]

This reaction prevents iron from oxidizing, thus protecting the pipeline from corrosion.

### 22. Electroplating Process

Electroplating is the process of depositing a thin layer of metal onto a conductive surface using an electric current. The object to be plated is made the cathode in an electrolytic cell, while the plating metal is the anode. The electrolyte contains a solution of the metal ions to be deposited. The process is used to enhance appearance, improve corrosion resistance, and reduce friction in components.

### 23. Differences Between Cathodic Coatings and Anodic Coatings

Cathodic coatings protect the metal substrate by acting as a physical barrier, often made of metals more cathodic than the substrate, like tin-plating on steel. Anodic coatings, on the other hand, involve coating the metal with a more anodic metal, such as zinc on steel (galvanization), which corrodes preferentially, protecting the underlying metal.

### 24. Chemical Theory of Corrosion and Its Types with Suitable Examples

The chemical theory of corrosion involves direct chemical reactions between a metal and environmental factors, leading to the formation of corrosion products like oxides. Types include uniform corrosion, where the metal surface corrodes evenly (e.g., rusting of iron), and pitting corrosion, where localized pits form, leading to material failure (e.g., pitting in stainless steel).

### 25. Galvanic Corrosion and Its Mechanism

Galvanic corrosion occurs when two dissimilar metals are in electrical contact in the presence of an electrolyte. The more anodic metal corrodes, while the more cathodic metal is protected. This type of corrosion is common in metal joints, such as between steel and copper pipes, where the steel corrodes, protecting the copper.

### 26. Differential Aeration Corrosion Mechanism with Suitable Examples

Differential aeration corrosion occurs when different areas of a metal surface are exposed to varying oxygen concentrations. The area with lower oxygen concentration becomes anodic and corrodes, while the area with higher oxygen concentration remains cathodic. An example is the corrosion of steel under a water droplet, where the center of the droplet (low oxygen) corrodes, while the edge (high oxygen) remains intact.