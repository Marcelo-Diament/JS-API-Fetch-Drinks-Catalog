window.onload = () => {

  debug = true;

  /**
   * @function sanitizeStr
   * Returns sanitized and formatted string according to the second passed argument
   * 
   * @param {String} str - String to be sanitzed
   * @param {String} type - Type of sanitazation purpose
   * 
   * @returns a formatted string
   * 
   * @example sanitizeStr('Aá  34') // returns 'Aa 34'
   * @example sanitizeStr('Aá  34', 'class') // returns 'aa-34'
   * @example sanitizeStr('Aá  34', 'id') // returns 'aa_34'
   * @example sanitizeStr('Aá  34', 'text') // returns 'Aá 34'
   */
  sanitizeStr = (str, type = 'default') => {

    let newStr = str,
      originalStr = str,
      validators = [];

    const spacesConsecutive = [/\s{2,}/g, ' '],
      accentuationVowelA = [/à|ã|â|ä|á/g, 'a'],
      accentuationVowelAUpper = [/À|Ã|Â|Ä|Á/g, 'A'],
      accentuationVowelE = [/è|ê|ë|é/g, 'e'],
      accentuationVowelEUpper = [/È|Ê|Ë|É/g, 'E'],
      accentuationVowelI = [/ì|î|ï|í/g, 'i'],
      accentuationVowelIUpper = [/Ì|Î|Ï|Í/g, 'I'],
      accentuationVowelO = [/ò|õ|ô|ö|ó/g, 'o'],
      accentuationVowelOUpper = [/Ò|Õ|Ô|Ö|Ó/g, 'O'],
      accentuationVowelU = [/ù|û|ü|ú/g, 'u'],
      accentuationVowelUUpper = [/Ù|Û|Ü|Ú/g, 'U'],
      accentuationC = [/ç/g, 'c'],
      accentuationCUpper = [/Ç/g, 'C'],
      accentuationN = [/ñ/g, 'n'],
      accentuationNUpper = [/Ñ/g, 'N'],
      notAlfaNum = [/[^\d|\w|\s|-]/gi, ''],
      spaceAny = [/\s/g],
      duplicatedHyphens = [/-{2,}/g, '-'],
      duplicatedUnderlines = [/_{2,}/g, '_'],
      hyphenToUnderline = [/-/g, '_'],
      underlineToHyphen = [/_/g, '-'];

    defaultValidation = () => validators.push(spacesConsecutive, accentuationVowelA, accentuationVowelAUpper, accentuationVowelE, accentuationVowelEUpper, accentuationVowelI, accentuationVowelIUpper, accentuationVowelO, accentuationVowelOUpper, accentuationVowelU, accentuationVowelUUpper, accentuationC, accentuationCUpper, accentuationN, accentuationNUpper, notAlfaNum, spaceAny, spacesConsecutive, duplicatedHyphens, duplicatedUnderlines);

    switch (type) {
      case 'text':
        validators.push(spacesConsecutive);
        break;
      case 'class':
        str = str.toLowerCase();
        spaceAny.push('-');
        validators.unshift(underlineToHyphen);
        defaultValidation();
        break;
      case 'id':
        spaceAny.push('_');
        validators.unshift(hyphenToUnderline);
        defaultValidation();
        break;
      case 'default':
      default:
        spaceAny.push(' ');
        defaultValidation();
    }

    for (validator of validators) {

      if (debug) {
        console.groupCollapsed(`%c${validator[0]}`, 'font-size:10px;font-weight:bold;');
        console.log(`%cnewStr Pre: %c${newStr}`, 'font-size:10px;font-weight:bold;', 'color:orange;font-weight:bold;');
      }

      if (type === 'class') { newStr = newStr.toLowerCase() };
      newStr = newStr.replace(validator[0], validator[1]);
      if (type === 'class') { newStr = newStr.toLowerCase() };

      if (debug) {
        console.log(`%cvalidator: %c${validator[0]} => ${validator[1]}`, 'font-size:10px;font-weight:bold;', 'color:orange;font-weight:bold;');
        console.log(`%ctype: %c${type}`, 'font-size:10px;font-weight:bold;', 'color:orange;font-weight:bold;');
        console.log(`%cnewStr Pos: %c${newStr}`, 'font-size:10px;font-weight:bold;', 'color:orange;font-weight:bold;');
        console.groupEnd();
      }

    }

    debug && console.log(`%cinput: %c${originalStr}%c\noutput: %c${newStr}`, 'font-size:10px;font-weight:bold;', 'color:darkorange;font-weight:bold;', 'font-size:10px;font-weight:bold;', 'color:cyan;font-weight:bold;');

    return newStr;
  }


  const queryParamsData = {
    alcoholic: '',
    alcoholicList: false,
    category: '',
    categoryList: false,
    glass: '',
    glassList: false,
    ingredient: '',
    ingredientId: '',
    ingredientDetail: false,
    drinkId: '',
    firstLetter: '',
    nameSearch: '',
  }

  const drinkData = {
    id: '',
    drink: '',
    category: '',
    IBA: '',
    alcoholic: '',
    glass: '',
    instructions: '',
    thumb: '',
    ingredients: [],
  }

  const ingredientData = {
    id: '',
    ingredient: '',
    description: '',
    type: '',
    alcohol: '',
    ABV: '',
  }

  const dataModels = {
    queryParams: queryParamsData,
    drink: drinkData,
    drinks: [],
    ingredient: ingredientData,
    ingredients: [],
    lists: {
      categories: [],
      alcoholic: [],
      glasses: [],
    },
  }

  let dataStored = dataModels;
  let dataTemp = undefined;

  storeData = (k = undefined, v = undefined) => {
    switch (true) {
      case (k === 'init'):
        localStorage.clear();
        localStorage.setItem('dataModels', JSON.stringify(dataModels));
        localStorage.setItem('dataStored', JSON.stringify(dataModels));
        localStorage.setItem('dataTemp', '');
        dataStored = dataModels;
        dataTemp = ''; return dataStored ? dataStored : localStorage.dataStored ? localStorage.dataStored : console.log('localStorage init | error');
      case k === undefined:
      case k === 'all':
        return dataStored;
      case k === 'last':
      case k === 'temp':
        return dataTemp;
      case k === 'models':
        return dataModels;
      case k === undefined && v !== undefined:
        console.log(`Ops! Parece que está tentando salvar ${v} mas não definiu aonde...`);
        return;
      case k === 'clear' && v !== undefined && v !== 'dataModels' && (v === 'dataStored' || v === 'dataTemp'):
      case k === 'reset' && v !== undefined && v !== 'dataModels' && (v === 'dataStored' || v === 'dataTemp'):
        localStorage.removeItem(v);
        localStorage.setItem(v, JSON.stringify(dataModels[v]));
        v = dataModels[v];
        return dataStored;
      case k === 'clear':
      case k === 'reset':
        storeData('init');
        dataStored = '';
        dataTemp = '';
        return;
      case k !== undefined && v === undefined:
        return localStorage.getItem(k) ? JSON.parse(localStorage.getItem(k)) : console.error(`Chave ${k} não encontrada`);
      case k !== undefined && v !== undefined && k === 'dataModels':
        console.log(`Ops! Parece que está tentando alterar o ${k} mas não tem permissões... Por favor, entre em contato conosco. Obrigado!`);
        return;
      default:
        console.log(`default | k = ${k}, v = ${v}`);
        return localStorage;
    }
  }

  /**
   * @function init
   * Initializes the application
   */
  const init = () => {
    storeData('init');
  };
  init();


}