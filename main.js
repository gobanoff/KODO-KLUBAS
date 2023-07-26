function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const array = document.querySelector(".array");
const array1 = document.querySelector(".array1");
const array2 = document.querySelector(".array2");
const array3 = document.querySelector(".array3");
const array4 = document.querySelector(".array4");
const array5 = document.querySelector(".array5");
const array6 = document.querySelector(".array6");
const array7 = document.querySelector(".array7");

// 1 UZDUOTIS "MUZEJUS"1. Išmanioji signalizacija ir judesio davikliai

const a = [
  61, 270, 252, 79, 203, 88, 182, 257, 306, 250, 141, 262, 40, 173, 128, 56,
  107, 313, 171, 287, 284, 179, 193, 183, 159, 231, 240, 21, 105, 254, 74, 70,
  297, 223, 281, 221, 120, 57, 317, 131, 279, 175, 113, 288, 146, 49, 271, 106,
  286, 208, 104,
];
console.log(a);

const b = 945916513;
const arr = [];

for (let i = 0; i < a.length; i++) {
  const c = b / a[i];
  arr.push(c);
}

const minArr = arr.map((item) => Math.floor(item));
const maxArr = arr.map((item) => Math.ceil(item));

const minArr1 = [];
const maxArr1 = [];

for (let i = 0; i < a.length; i++) {
  const x = minArr[i] * a[i];
  const y = maxArr[i] * a[i];
  minArr1.push(x);
  maxArr1.push(y);
}

console.log(minArr1);
console.log(maxArr1);
array.innerHTML = "Atsakymas i 1 uzduoti : 3680866 ";

console.log("Atsakymas i 1 uzduoti : 3680866 ");

// 2 UZDUOTIS DEBILU STATULOS

const p1 = [
  780, 893, 423, 548, 247, 395, 92, 815, 871, 194, 908, 76, 174, 552, 526, 544,
  883, 712, 937, 239, 399, 187, 808, 647, 868, 652, 870, 767, 403, 344, 659,
  237, 317, 170, 984, 367, 493, 120, 97, 60, 235, 615, 117, 684, 337, 157, 200,
  905, 725, 1000,
];

const p2 = [
  674, 59, 259, 568, 989, 842, 87, 658, 903, 882, 798, 820, 300, 598, 714, 853,
  215, 127, 992, 945, 971, 748, 789, 455, 394, 404, 113, 364, 962, 649, 356,
  324, 796, 709, 627, 562, 904, 313, 374, 286, 175, 182, 140, 326, 953, 600,
  550, 233, 220, 566,
];
let round = 0;
for (let i = 0; i < p1.length; i++) {
  const one = p1[i];
  const two = p2[i];
  if (one > two) {
    p1.push(p1[i]);
  }
  if (one > two) {
    p1.push(p2[i]);
  } else if (two > one) {
    p2.push(p1[i]);
  } else if (two > one) {
    p2.push(p2[i]);
  }
  round++;
}
console.log(round);
array1.innerHTML = "Atsakymas i 2 uzduoti : " + round;

// 3 UZDUOTIS 3. Veneros gimimas

const w = [4, 8, 5, 2, 7, 4, 5, 2, 9, 8];
let rnd = 45;

for (let i = 0; i < 45; i++) {
  let step1 = w[0] + w[w.length - 1];

  if (step1 < 10) w.push(step1);
  else if (step1 === 10) w.push(1);
  else if (step1 > 10) w.push(1, step1 - 10);
  function wave(w) {
    let minArr = w[0];
    let maxArr = w[w.length - 1];
    const minNum = Math.min(minArr, maxArr);

    for (let q = 0; q < minNum; q++) {
      const numToMove = w.pop();
      w.unshift(numToMove);
    }

    return w;
  }
  wave(w);
}

console.log(w);
array2.innerHTML = "Atsakymas i 3 uzduoti : 243 ";

function sum(w) {
  let sum = 0;

  for (let i = 0; i < w.length; i++) {
    const element = w[i];

    if (typeof element === "number") {
      sum += element;
    }
  }

  return sum;
}
const result = sum(w);
console.log("Total :", result);

// 4 UZDUOTIS - NERA
// 5 UZDUOTIS 5. Nilo krantų paslaptys

const l =
  "EtHvcJrNBhjRWgmdqwbnGHswenfETyrWtrEdfBGHNeLiaYopwqQasjklkWUiLkDFASVCMWsHGdQNbnkpolDSjDglkfSAFGqwqwBNvcDvFGjhbFMwKJqNbaiWeduyJueboQRxcvbnyumEGrtHWp";
const letterArray = l.split("");
console.log(letterArray);
let sp1 = "qwertyuiop";
let sp2 = "asdfghjkl";
let sp3 = "zxcvbnm";
let sp4 = "QWERTYUIOP";
let sp5 = "ASDFGHJKL";
let sp6 = "ZXCVBNM";

const s1 = sp1.split("");
const s2 = sp2.split("");
const s3 = sp3.split("");
const s4 = sp4.split("");
const s5 = sp5.split("");
const s6 = sp6.split("");

function arrayDecrease(arrA, arrB) {
  for (let i = 0; i < arrB.length - 1; i++) {
    const rd1 = arrB[i];
    const rd2 = arrB[i + 1];
    if (arrA.includes(rd1) && arrA.includes(rd2)) {
      arrB.splice(i, 2);
      i--;
    }
  }
  return { arrA, arrB };
}
for (let i = 0; i < letterArray.length - 1; i++) {
  arrayDecrease(sp1, letterArray);
  arrayDecrease(sp2, letterArray);
  arrayDecrease(sp3, letterArray);
  arrayDecrease(sp4, letterArray);
  arrayDecrease(sp5, letterArray);
  arrayDecrease(sp6, letterArray);
}

console.log(letterArray);
array3.innerHTML = "Atsakymas i 5 uzduoti : " + letterArray;

// 6 UZDUOTIS 6. Paslaptingas žvilgsnis

const prb = [
  "B",
  "C",
  "Č",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "M",
  "N",
  "P",
  "R",
  "S",
  "Š",
  "T",
  "V",
  "Z",
  "Ž",
];
const bls = ["A", "Ą", "E", "Ę", "Ė", "I", "Į", "Y", "O", "U", "Ų", "Ū"];

const vrn = ["Š", "Č", "Ž"];
const uzd = ["D", "P", "O"];

const rd =
  "ŠŽYOŠŠVTPVĮŲĮĮŲŠVŲEŲMUŲŠŲLKŠVŲŽŽRŽŽĮŽFPĖŲŠŽJŲŪVŠŲŽYDGTŠDPDEŽŠFŪŠIĮARJEŲYĖŽŠFŽLŠYBIVŽMLUEPŠRŠYŠISŠŪĖDBŠULŪVPŠĖŠŠŽJŲŪĮŠŲFERLJJPIŲĖBAONELŠŲEBŠŠEIŠŲŽBAŲŠĖŠVYŠŲĘŽŠHŠRIRKŽŲŪŠEUJBYKŠIŠTŲBĮŲŲŠŠITĮCSHKŠŠŲŲPTŽŪŽEOORŠŠŲŠĮIŽFFĮLYEIKNŠNŽLFHŠŠŠNPKŲANŠĖPATŪŠUVLDŪŠBVDPĖNOUŲIŲŲLŲEBŠMŪĖOVĮĖŽŠDBUŠŲŲŠKŲŠELTLĮFJEUŲŠKVYKJĮŠŠŲRŽOĖŠŽŠŠYŠŽŽIŪTŽOŠOUĮŠMŠŪVEŲŲVRLAYŲŠTAĮAILĖYŲEVŲŠRKŲŽEŽĮĖVŠBĘBFOJŠIEOŲKFPŽPUPĖŠĖNĮRŠŠĮŠĮŽBĮĖCŠŠŽKŲŠNŲŲBĖŲDŲŠAOŲŽŠŠŠŽŪVŲŪFDŠSRVYVŠŠŪŲŽSTOŠŲUMŽŠPVŠŠŽKDŠŲNŠŠŠBIJŠJŠŠŲYŪŠAŠTŲJŪBŲŠGEHŽTŪŠJŲŲJŠADEREKŠEŲŲŽDSGŠUŠPŽŲKJVŲOOŽIŽŠĘLŲĮŠEŪŠŲBŽĮVARŲNŲŠŪĮŽŠVŠMIVTŠŪŠBĮŲŽGJAONVIŪGŲKĖŽČNŠKŲĮNYĮOŪŲŽŲĮOŠGLPIPNYŽŠDŽPĮIŠIŠVŽŲOĖBŽVULJŠŠŪŠILŲAŽVVĮFPŽAĖAŠLIPŠŪŲNABĮAVŽJŠĮŽŪLRŲĮŽEŽŽIAFŠHJOYYŲŠŲĖVIŲŽDŠŲJŠŠŲĖJŲŠŪEĮŠEŠŠIAABŠŽABAPŲTMŲTŠNŲILLŠĮŲRŠJŽUYŠŲTPTĮCŠKRPBŽŠŠKĖAŲPŲJCŲŠVVŲŠMŠUMRĖŠŲŠFŠLEŽŪLRŠĖŲAŠMEŠŠFPOŠPŲPEJŠRŠĮŲOŽTŽUŠĖĮDŲKŠŠNIIMĮĖŠNABJĖEŠIIJŠĖLVĖRĖJFŲŽORŠĮŽŠVĮŲLEŪŠCKĮALILEĮABŠĮTŽDŽŪŲOOŽEPŠCIĮVMRVRLŠŠUŠŲUŲŠŠAŠŠŠŽFRŽĖVVŠCŽŠŲNDNIŠVŠŠŠŲYLIŠCDŽĖŪĖUMŲĮVIŽRIŠRAŲŽBBGŠŲŠOŠBŠŪUŲBYĮYŠŠŽŲŠŠYŠPŠOĮBŪŽDŽCJŠĖŲFŠĘŠŠRIBAŲĮĮŠŠŠOŲJĮĮVŠŠŠLOŠCŠŠŪĮBŠTFĮIŠUŲĖŠŽŽYVKŲPĮEĮĘŽVJĮĖJUŲŲAVAIGŠCŠMŪĮŽŽĮŠŠŠŠŠŪYŲŠŠDĖŲŠŠĮPYRMPVŠŪĖŠĮEĖŠŪŠNVŲŠLŲPŲŽŲTMŠŠĖŠYTŠPRLNVOŪVŲRIŪOĖŲŠFŲŪHŪAŽŽŪYPŠDJŽŪŠĘPLRYCAOŪEEŲĮŲŽJĮYNORPJEŲKLBRŽVVŲŠLŽYŲVTFTŽŲĖYYMGŪŠLŠŽVĮŽŠBPTKFŠĮOŽŠĖIŠEAPŲŽIŲŲBŠŪSŲLŪLŲIŠLBUNŲTŲAŽŠHŲŠŠUKŪIRĮŲŠYAĘTŠTTYŲŽNDŠŠĮENIŠKŠŽŪRĮIĖEGVŽŠŠŲŠŽŪAŲŠTŠFDŽŲŽRŲMYIYYŲKRŠŽŲTŠFPŲŪĖTRŠŲMPVLŠŠĖNOŪYRŠTŠĮŲJJPJRBIŠŲŲĮYŠGMLLEFCYŪYŪYTOYĮŠUĮ";
let raidArray = rd.split("");

console.log(raidArray);
const empty = [];

let z = "ŠŽYOŠŠVTPVĮŲĮĮŲŠVŲEŲMUŲŠŲLKŠVŲŽŽRŽŽĮŽFPĖŲŠŽJŲŪVŠŲŽYDGTŠDPDEŽŠFŪŠIĮA";
let zet = z.split("");

function sumOfLetters(index, masyvasA, masyvasB, x) {
  const res = [];
  for (let i = index + 1; i < masyvasB.length; i++) {
    if (masyvasA.includes(masyvasB[i])) {
      res.push(masyvasB[i]);
    }
    if (masyvasB.indexOf(masyvasB[i]) > masyvasB.indexOf(x) - 1) break;
  }
  return res;
}
let indexT = raidArray.indexOf("T");
let indexE = raidArray.indexOf("E");
let indexL = raidArray.indexOf("L");
let indexI = raidArray.indexOf("I");
let indexA = raidArray.indexOf("A");

for (let i = 0; i < raidArray.length; i++) {
  sumOfLetters(indexT, prb, raidArray, "E");

  sumOfLetters(indexE, bls, raidArray, "L");

  sumOfLetters(indexL, vrn, raidArray, "I");

  sumOfLetters(indexI, uzd, raidArray, "A");
}

console.log(sumOfLetters(indexT, prb, raidArray, "E"));
console.log(sumOfLetters(indexE, bls, raidArray, "L"));
console.log(sumOfLetters(indexL, vrn, raidArray, "I"));
console.log(sumOfLetters(indexI, uzd, raidArray, "A"));

let cons = sumOfLetters(indexT, prb, raidArray, "E");
let vow = sumOfLetters(indexE, bls, raidArray, "L");
let brd = sumOfLetters(indexL, vrn, raidArray, "I");
let dpo = sumOfLetters(indexI, uzd, raidArray, "A");

let rslt = cons + "," + vow + "," + brd + "," + dpo;

console.log("Rezultatas : ", rslt);

function searchForLtr() {
  const findT = (raide) => raide === "T";
  const findElement2 = raidArray.find(findT);
}
