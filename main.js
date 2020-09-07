window.onload = () => {

  debug = true;

  // HELPERS

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

    debug && console.groupCollapsed('%cprocessing...', 'font-size:8px;font-weight:bold;');

    for (validator of validators) {

      if (debug) {
        console.groupCollapsed(`%c${validator[0]}`, 'font-size:8px;font-weight:bold;');
        console.log(`%cnewStr Pre: %c${newStr}`, 'font-size:8px;font-weight:bold;', 'color:orange;font-weight:bold;');
      }

      if (type === 'class') { newStr = newStr.toLowerCase() };
      newStr = newStr.replace(validator[0], validator[1]);
      if (type === 'class') { newStr = newStr.toLowerCase() };

      if (debug) {
        console.log(`%cvalidator: %c${validator[0]} => ${validator[1]}`, 'font-size:8px;font-weight:bold;', 'color:orange;font-weight:bold;');
        console.log(`%ctype: %c${type}`, 'font-size:8px;font-weight:bold;', 'color:orange;font-weight:bold;');
        console.log(`%cnewStr Pos: %c${newStr}`, 'font-size:8px;font-weight:bold;', 'color:orange;font-weight:bold;');
        console.groupEnd();
      }

    }

    debug && console.groupEnd();

    debug && console.log(`%cinput: %c${originalStr}%c\noutput: %c${newStr}`, 'font-size:8px;font-weight:bold;', 'color:darkorange;font-weight:bold;', 'font-size:8px;font-weight:bold;', 'color:cyan;font-weight:bold;');

    return newStr;
  }

  /**
   * @function sanitizeStrTest
   * Tests each scenery of sanitizeTest() application. If debug is set as true, the function will be tested and its results will be printed at console.
   * 
   * @returns console messages showing each step of the function.
   */
  sanitizeStrTest = () => {

    console.groupCollapsed('%cHelper Function\n%csanitizeStr()', 'font-size:8px;font-weight:bold;', 'margin:4px 0;padding:2px 4px;background-color:#f0dc5b;color:#1f1d0f;border: 2px solid #1f1d0f;font-size:12px;font-weight:bold;line-height:16px;border-radius:4px;');

    console.groupCollapsed('%csanitizeStr(\'AáeÊiîOõuü!!   ! Teste  34/*-+:"?__---_R#\'%c, \'default\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-style:italic;font-size:10px', 'font-size:10px;font-weight:bold;color:orange');
    sanitizeStr('AáeÊiîOõuü!!   ! Teste  34/*-+:"?__---_R#');
    console.groupEnd();

    console.groupCollapsed('%csanitizeStr(\'AáeÊiîOõuü!!   ! Teste  34/*-+:"?__---_R#\', %c\'class\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    sanitizeStr('AáeÊiîOõuü!!   ! Teste  34/*-+:"?__---_R#', 'class');
    console.groupEnd();

    console.groupCollapsed('%csanitizeStr(\'AáeÊiîOõuü!!   ! Teste  34/*-+:"?__---_R#\', %c\'id\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    sanitizeStr('AáeÊiîOõuü!!   ! Teste  34/*-+:"?__---_R#', 'id');
    console.groupEnd();

    console.groupCollapsed('%csanitizeStr(\'AáeÊiîOõuü!!   ! Teste  34/*-+:"?__---_R#\', %c\'text\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    sanitizeStr('AáeÊiîOõuü!!   ! Teste  34/*-+:"?__---_R#', 'text');
    console.groupEnd();

    console.groupEnd();
  }

  const init = () => {

  };
  init();

  // Is debug variable is set as true, each test function will be executed and its results printed at the console.
  if (debug) {
    console.groupCollapsed('%cdebug mode: %cON', 'font-size:8px;font-weight:bold;', 'font-size:8px;font-weight:bold;color:cyan;font-size:12px;font-weight:bold;');

    // Helper functions
    console.groupCollapsed('%ctype: %cHelper Functions', 'font-size:8px;font-weight:bold;', 'font-size:8px;font-weight:bold;color:#f0dc5b;font-size:12px;font-weight:bold;');
    sanitizeStrTest();
    console.groupEnd();

    console.groupEnd();
  }

}