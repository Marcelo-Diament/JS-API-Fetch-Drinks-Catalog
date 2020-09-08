window.onload = () => {

  debug = true;

  // HELPERS

  /**
   * @const consoleDefaultParams
   * Detains all default template console style
   * @property size - defines font-size, line-height as well as padding and margin according to its arguments passed (size and 'scenery')
   * @property color - defines color, background-color as well as border style, according to its arguments ('status' and 'scenery')
   * @property main - used in both size and color properties, defines its status as main
   * @property secondary - used in both size and color properties, defines its status as secondary
   * @property badge - used in both size and color properties, defines its status as badge
   */
  consoleDefaultParams = {
    size: {
      xxs: {
        main: 'font-size:12px;line-height:14px;font-weight:bold;padding:8px 8px;margin:8px auto;',
        secondary: 'font-size:10px;line-height:12px;padding:8px 8px;margin:8px auto;',
        badge: 'font-size:10px;line-height:12px;padding:8px 8px;margin:8px auto;border-radius:8px;',
        badgeInverted: 'font-size:10px;line-height:12px;padding:8px 8px;margin:8px auto;border-radius:8px;',
      },
      xs: {
        main: 'font-size:14px;line-height:16px;font-weight:bold;padding:8px 8px;margin:8px auto;',
        secondary: 'font-size:12px;line-height:14px;padding:8px 8px;margin:8px auto;',
        badge: 'font-size:11px;line-height:13px;padding:8px 8px;margin:8px auto;border-radius:8px;',
        badgeInverted: 'font-size:11px;line-height:13px;padding:8px 8px;margin:8px auto;border-radius:8px;',
      },
      sm: {
        main: 'font-size:16px;line-height:18px;font-weight:bold;padding:8px 8px;margin:5px auto;',
        secondary: 'font-size:14px;line-height:16px;padding:8px 8px;margin:5px auto;',
        badge: 'font-size:12px;line-height:14px;padding:8px 8px;margin:5px auto;border-radius:8px;',
        badgeInverted: 'font-size:12px;line-height:14px;padding:8px 8px;margin:5px auto;border-radius:8px;',
      },
      md: {
        main: 'font-size:18px;line-height:20px;font-weight:bold;padding:5px 10px;margin:5px auto;',
        secondary: 'font-size:16px;line-height:18px;padding:5px 10px;margin:5px auto;',
        badge: 'font-size:13px;line-height:15px;padding:5px 10px;margin:5px auto;border-radius:8px;',
        badgeInverted: 'font-size:13px;line-height:15px;padding:5px 10px;margin:5px auto;border-radius:8px;',
      },
      lg: {
        main: 'font-size:20px;line-height:22px;font-weight:bold;padding:5px 10px;margin:5px auto;',
        secondary: 'font-size:18px;line-height:20px;padding:5px 10px;margin:5px auto;',
        badge: 'font-size:14px;line-height:16px;padding:5px 10px;margin:5px auto;border-radius:8px;',
        badgeInverted: 'font-size:14px;line-height:16px;padding:5px 10px;margin:5px auto;border-radius:8px;',
      },
      xl: {
        main: 'font-size:22px;line-height:24px;font-weight:bold;padding:6px 12px;margin:6px auto;',
        secondary: 'font-size:20px;line-height:22px;padding:6px 12px;margin:6px auto;',
        badge: 'font-size:15px;line-height:17px;padding:6px 12px;margin:6px auto;border-radius:8px;',
        badgeInverted: 'font-size:15px;line-height:17px;padding:6px 12px;margin:6px auto;border-radius:8px;',
      },
      xxl: {
        main: 'font-size:24px;line-height:26px;font-weight:bold;padding:6px 12px;margin:6px auto;',
        secondary: 'font-size:22px;line-height:24px;padding:6px 12px;margin:6px auto;',
        badge: 'font-size:16px;line-height:18px;padding:6px 12px;margin:6px auto;border-radius:8px;',
        badgeInverted: 'font-size:16px;line-height:18px;padding:6px 12px;margin:6px auto;border-radius:8px;',
      },
    },
    color: {
      default: {
        main: 'background-color:transparent;color:$fff;',
        secondary: 'color:#fff;',
        badge: 'color:#fff;border: 2px solid #fff;',
        badgeInverted: 'color:$fff;background-color:#000;border: 2px solid $fff;',
      },
      bw: {
        main: 'background-color:#000;color:#fff;',
        secondary: 'color:#000;',
        badge: 'color:#000;border: 2px solid #000;',
        badgeInverted: 'color:#fff;background-color:#000;border: 2px solid #fff;',
      },
      wb: {
        main: 'background-color:#fff;color:#000;',
        secondary: 'color:#fff;',
        badge: 'color:#fff;border: 2px solid #fff;',
        badgeInverted: 'color:#000;background-color:#fff;border: 2px solid #000;',
      },
      error: {
        main: 'background-color:#8a160d;color:#fff;',
        secondary: 'color:#8a160d;',
        badge: 'color:#8a160d;border: 2px solid #8a160d;',
        badgeInverted: 'color:#fff;background-color:#8a160d;border: 2px solid #fff;',
      },
      fail: {
        main: 'background-color:#f44336;color:#fff;',
        secondary: 'color:#f44336;',
        badge: 'color:#f44336;border: 2px solid #f44336;',
        badgeInverted: 'color:#fff;background-color:#f44336;border: 2px solid #fff;',
      },
      danger: {
        main: 'background-color:#ff5722;color:#fff;',
        secondary: 'color:#ff5722;',
        badge: 'color:#ff5722;border: 2px solid #ff5722;',
        badgeInverted: 'color:#fff;background-color:#ff5722;border: 2px solid #fff;',
      },
      alert: {
        main: 'background-color:#ff9800;color:#000;',
        secondary: 'color:#ff9800;',
        badge: 'color:#ff9800;border: 2px solid #ff9800;',
        badgeInverted: 'color:#000;background-color:#ff9800;border: 2px solid #000;',
      },
      warning: {
        main: 'background-color:#ffc107;color:#000;',
        secondary: 'color:#ffc107;',
        badge: 'color:#ffc107;border: 2px solid #ffc107;',
        badgeInverted: 'color:#000;background-color:#ffc107;border: 2px solid #000;',
      },
      info: {
        main: 'background-color:#00bcd4;color:#000;',
        secondary: 'color:#00bcd4;',
        badge: 'color:#00bcd4;border: 2px solid #00bcd4;',
        badgeInverted: 'color:#000;background-color:#00bcd4;border: 2px solid #000;',
      },
      success: {
        main: 'background-color:#8bc34a;color:#000;',
        secondary: 'color:#8bc34a;',
        badge: 'color:#8bc34a;border: 2px solid #8bc34a;',
        badgeInverted: 'color:#000;background-color:#8bc34a;border: 2px solid #000;',
      },
      successfull: {
        main: 'background-color:#4caf50;color:#000;',
        secondary: 'color:#4caf50;',
        badge: 'color:#4caf50;border: 2px solid #4caf50;',
        badgeInverted: 'color:#000;background-color:#4caf50;border: 2px solid #000;',
      },
      important: {
        main: 'background-color:#e91e63;color:#000;',
        secondary: 'color:#e91e63;',
        badge: 'color:#e91e63;border: 2px solid #e91e63;',
        badgeInverted: 'color:#000;background-color:#e91e63;border: 2px solid #000;',
      },
      log: {
        main: 'background-color:#c7c7c7;color:#2e2e2e;',
        secondary: 'color:#c7c7c7;',
        badge: 'color:#c7c7c7;border: 2px solid #c7c7c7;',
        badgeInverted: 'color:#2e2e2e;background-color:#c7c7c7;border: 2px solid #2e2e2e;',
      },
    },
  };

  /**
   * @function makeComment
   * Returns a comment to console with a custom style according to the passed arguments
   * 
   * @param {String} title - the title of the comment (set as groupCollapsed as default)
   * @param {Array} comments - array with each comment to be consoled as a string element
   * @param {String} status? - status to be used to define its style (default|bw|wb|fail|danger|alert|warning|info|success|successfull|important)
   * @param {String} size? - defines font properties (xxs|xs|sm|md|lg|xl|xxl)
   * @param {String} type? - defines wich style to be applied (main|secondary|badge)
   * 
   * @requires consoleDefaultParams - that maps its styles template properties
   */
  const makeComment = (title, comments = undefined, status = 'default', size = "md", type = 'main') => {

    if (comments !== undefined && comments === comments.toString()) {
      oldComments = comments;
      comments = [];
      comments.push(oldComments)
    }

    switch (type) {
      case 'main':
        console.groupCollapsed(`%c${status}%c %c${title}`,
          `${consoleDefaultParams.size['xxs']['badge'] + consoleDefaultParams.color['log']['main']}`,
          `${consoleDefaultParams.size[size]['secondary']}`,
          `${consoleDefaultParams.size[size][type] + consoleDefaultParams.color[status][type]}`);
        if (comments !== undefined) {
          for (comment of comments) {
            console.log(`%c${comment}`, `${consoleDefaultParams.size[size]['secondary'] + consoleDefaultParams.color[status]['secondary']}`);
          }
        }
        console.groupEnd();
        break;
      case 'badge':
        console.groupCollapsed(`%c${status}%c %c${title}`,
          `${consoleDefaultParams.size['xxs']['badge'] + consoleDefaultParams.color['log']['main']}`,
          `${consoleDefaultParams.size[size]['secondary']}`,
          `${consoleDefaultParams.size[size][type] + consoleDefaultParams.color[status][type]}`);
        if (comments !== undefined) {
          for (comment of comments) {
            console.log(`%c${comment}`, `${consoleDefaultParams.size[size]['secondary'] + consoleDefaultParams.color[status]['secondary']}`);
          }
        }
        console.groupEnd();
        break;
      case 'badgeInverted':
        console.groupCollapsed(`%c${status}%c %c${title}`,
          `${consoleDefaultParams.size['xxs']['badge'] + consoleDefaultParams.color['log']['main']}`,
          `${consoleDefaultParams.size[size]['secondary']}`,
          `${consoleDefaultParams.size[size][type] + consoleDefaultParams.color[status][type]}`);
        if (comments !== undefined) {
          for (comment of comments) {
            console.log(`%c${comment}`, `${consoleDefaultParams.size[size]['secondary'] + consoleDefaultParams.color[status]['secondary']}`);
          }
        }
        console.groupEnd();
        break;
      case 'secondary':
      default:
        if (comments !== undefined) {
          for (comment of comments) {
            console.log(`%c${status}%c %c${title}%c %c${comment}`,
              `${consoleDefaultParams.size['xxs']['badge'] + consoleDefaultParams.color['log']['main']}`,
              `${consoleDefaultParams.size[size]['secondary']}`,
              `${consoleDefaultParams.size[size]['secondary'] + consoleDefaultParams.color[status]['main']}`,
              `${consoleDefaultParams.size[size]['secondary']}`,
              `${consoleDefaultParams.size[size]['secondary'] + consoleDefaultParams.color[status]['secondary']}`);
          }
          break;
        }
    }
  }
  /**
   * @function makeCommentTest
   * Tests each scenery of makeComment() application. If debug is set as true, the function will be tested and its results will be printed at console.
   * 
   * @returns console messages showing each step of the function.
   */
  makeCommentTest = () => {
    console.groupCollapsed('%cHelper Function\n%cmakeComment()', 'font-size:10px;font-weight:bold;', 'margin:8px 0;padding:2px 4px;background-color:#f0dc5b;color:#1f1d0f;border: 2px solid #1f1d0f;font-size:12px;font-weight:bold;line-height:16px;border-radius:8px;');

    console.groupCollapsed('%cHelper Function > makeComment()\n%cby status', 'font-size:10px;font-weight:bold;', 'margin:8px 0;padding:2px 4px;background-color:#f0dc5b;color:#1f1d0f;border: 2px solid #1f1d0f;font-size:12px;font-weight:bold;line-height:16px;border-radius:8px;');

    console.groupCollapsed('%cmakeComment(\'default md main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'default\'%c,\'md\',\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('default md main', ['Comment 01', 'Comment 02', 'Comment 03'], 'default', 'md', 'main');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'wb md main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'wb\'%c,\'md\',\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('wb md main', ['Comment 01', 'Comment 02', 'Comment 03'], 'wb', 'md', 'main');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'bw md main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'bw\'%c,\'md\',\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('bw md main', ['Comment 01', 'Comment 02', 'Comment 03'], 'bw', 'md', 'main');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'error md main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'error\'%c,\'md\',\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('error md main', ['Comment 01', 'Comment 02', 'Comment 03'], 'error', 'md', 'main');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'fail md main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'fail\'%c,\'md\',\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('fail md main', ['Comment 01', 'Comment 02', 'Comment 03'], 'fail', 'md', 'main');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'danger md main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'danger\'%c,\'md\',\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('danger md main', ['Comment 01', 'Comment 02', 'Comment 03'], 'danger', 'md', 'main');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'alert md main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'alert\'%c,\'md\',\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('alert md main', ['Comment 01', 'Comment 02', 'Comment 03'], 'alert', 'md', 'main');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'warning md main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'warning\'%c,\'md\',\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('warning md main', ['Comment 01', 'Comment 02', 'Comment 03'], 'warning', 'md', 'main');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'info md main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'info\'%c,\'md\',\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('info md main', ['Comment 01', 'Comment 02', 'Comment 03'], 'info', 'md', 'main');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'success md main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'success\'%c,\'md\',\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('success md main', ['Comment 01', 'Comment 02', 'Comment 03'], 'success', 'md', 'main');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'successfull md main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'successfull\'%c,\'md\',\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('successfull md main', ['Comment 01', 'Comment 02', 'Comment 03'], 'successfull', 'md', 'main');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'important md main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'important\'%c,\'md\',\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('important md main', ['Comment 01', 'Comment 02', 'Comment 03'], 'important', 'md', 'main');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'log md main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'log\'%c,\'md\',\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('log md main', ['Comment 01', 'Comment 02', 'Comment 03'], 'log', 'md', 'main');
    console.groupEnd();

    console.groupEnd();

    console.groupCollapsed('%cHelper Function > makeComment()\n%cby size', 'font-size:10px;font-weight:bold;', 'margin:8px 0;padding:2px 4px;background-color:#f0dc5b;color:#1f1d0f;border: 2px solid #1f1d0f;font-size:12px;font-weight:bold;line-height:16px;border-radius:8px;');

    console.groupCollapsed('%cmakeComment(\'info xxs main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], \'info\', %c\'xxs\'%c,\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('info xxs main', ['Comment 01', 'Comment 02', 'Comment 03'], 'info', 'xxs', 'main');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'info xs main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], \'info\', %c\'xs\'%c,\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('info xs main', ['Comment 01', 'Comment 02', 'Comment 03'], 'info', 'xs', 'main');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'info sm main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], \'info\', %c\'sm\'%c,\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('info sm main', ['Comment 01', 'Comment 02', 'Comment 03'], 'info', 'sm', 'main');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'info md main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], \'info\', %c\'md\'%c,\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('info md main', ['Comment 01', 'Comment 02', 'Comment 03'], 'info', 'md', 'main');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'info lg main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], \'info\', %c\'lg\'%c,\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('info lg main', ['Comment 01', 'Comment 02', 'Comment 03'], 'info', 'lg', 'main');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'info xl main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], \'info\', %c\'xl\'%c,\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('info xl main', ['Comment 01', 'Comment 02', 'Comment 03'], 'info', 'xl', 'main');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'info xxl main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], \'info\', %c\'xxl\'%c,\'main\')', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('info xxl main', ['Comment 01', 'Comment 02', 'Comment 03'], 'info', 'xxl', 'main');
    console.groupEnd();

    console.groupEnd();

    console.groupCollapsed('%cHelper Function > makeComment()\n%cby type', 'font-size:10px;font-weight:bold;', 'margin:8px 0;padding:2px 4px;background-color:#f0dc5b;color:#1f1d0f;border: 2px solid #1f1d0f;font-size:12px;font-weight:bold;line-height:16px;border-radius:8px;');

    console.groupCollapsed('%cmakeComment(\'info md main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], \'info\',\'md\',%c\'main\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('info md main', ['Comment 01', 'Comment 02', 'Comment 03'], 'info', 'md', 'main');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'info md secondary\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], \'info\',\'md\',%c\'secondary\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('info md secondary', ['Comment 01', 'Comment 02', 'Comment 03'], 'info', 'md', 'secondary');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'info md badge\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], \'info\',\'md\',%c\'badge\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('info md badge', ['Comment 01', 'Comment 02', 'Comment 03'], 'info', 'md', 'badge');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'info md badgeInverted\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], \'info\',\'md\',%c\'badgeInverted\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('info md badgeInverted', ['Comment 01', 'Comment 02', 'Comment 03'], 'info', 'md', 'badgeInverted');
    console.groupEnd();

    console.groupEnd();

    console.groupCollapsed('%cHelper Function > makeComment()\n%cmixed', 'font-size:10px;font-weight:bold;', 'margin:8px 0;padding:2px 4px;background-color:#f0dc5b;color:#1f1d0f;border: 2px solid #1f1d0f;font-size:12px;font-weight:bold;line-height:16px;border-radius:8px;');

    console.groupCollapsed('%cmakeComment(\'incomplete\')', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('incomplete');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'default\', [\'Comment 01\'])', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('default', ['Comment 01']);
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'default xxs main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'default\'%c,%c\'xxs\'%c,%c\'main\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('default xxs main', ['Comment 01', 'Comment 02', 'Comment 03'], 'default', 'xxs', 'main');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'bw xs main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'bw\'%c,%c\'xs\'%c,%c\'main\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('bw xs main', ['Comment 01', 'Comment 02', 'Comment 03'], 'bw', 'xs', 'main');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'wb sm main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'wb\'%c,%c\'sm\'%c,%c\'main\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('wb sm main', ['Comment 01', 'Comment 02', 'Comment 03'], 'wb', 'sm', 'main');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'error md main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'error\'%c,%c\'md\'%c,%c\'main\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('error md main', ['Comment 01', 'Comment 02', 'Comment 03'], 'error', 'md', 'main');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'fail lg main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'fail\'%c,%c\'lg\'%c,%c\'main\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('fail lg main', ['Comment 01', 'Comment 02', 'Comment 03'], 'fail', 'lg', 'main');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'danger xl main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'danger\'%c,%c\'xl\'%c,%c\'main\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('danger xl main', ['Comment 01', 'Comment 02', 'Comment 03'], 'danger', 'xl', 'main');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'alert xxl main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'alert\'%c,%c\'xxl\'%c,%c\'main\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('alert xxl main', ['Comment 01', 'Comment 02', 'Comment 03'], 'alert', 'xxl', 'main');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'warning xl main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'warning\'%c,%c\'xl\'%c,%c\'main\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('warning xl main', ['Comment 01', 'Comment 02', 'Comment 03'], 'warning', 'xl', 'main');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'info lg main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'info\'%c,%c\'lg\'%c,%c\'main\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('info lg main', ['Comment 01', 'Comment 02', 'Comment 03'], 'info', 'lg', 'main');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'success md main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'success\'%c,%c\'md\'%c,%c\'main\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('success md main', ['Comment 01', 'Comment 02', 'Comment 03'], 'success', 'md', 'main');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'successfull sm main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'successfull\'%c,%c\'sm\'%c,%c\'main\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('successfull sm main', ['Comment 01', 'Comment 02', 'Comment 03'], 'successfull', 'sm', 'main');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'important xs main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'important\'%c,%c\'xs\'%c,%c\'main\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('important xs main', ['Comment 01', 'Comment 02', 'Comment 03'], 'important', 'xs', 'main');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'log xxs main\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'log\'%c,%c\'xxs\'%c,%c\'main\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('log xxs main', ['Comment 01', 'Comment 02', 'Comment 03'], 'log', 'xxs', 'main');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'default xxs secondary\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'default\'%c,%c\'xxs\'%c,%c\'secondary\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('default xxs secondary', ['Comment 01', 'Comment 02', 'Comment 03'], 'default', 'xxs', 'secondary');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'bw xs secondary\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'bw\'%c,%c\'xs\'%c,%c\'secondary\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('bw xs secondary', ['Comment 01', 'Comment 02', 'Comment 03'], 'bw', 'xs', 'secondary');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'wb sm secondary\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'wb\'%c,%c\'sm\'%c,%c\'secondary\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('wb sm secondary', ['Comment 01', 'Comment 02', 'Comment 03'], 'wb', 'sm', 'secondary');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'error md secondary\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'error\'%c,%c\'md\'%c,%c\'secondary\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('error md secondary', ['Comment 01', 'Comment 02', 'Comment 03'], 'error', 'md', 'secondary');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'fail lg secondary\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'fail\'%c,%c\'lg\'%c,%c\'secondary\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('fail lg secondary', ['Comment 01', 'Comment 02', 'Comment 03'], 'fail', 'lg', 'secondary');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'danger xl secondary\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'danger\'%c,%c\'xl\'%c,%c\'secondary\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('danger xl secondary', ['Comment 01', 'Comment 02', 'Comment 03'], 'danger', 'xl', 'secondary');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'alert xxl secondary\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'alert\'%c,%c\'xxl\'%c,%c\'secondary\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('alert xxl secondary', ['Comment 01', 'Comment 02', 'Comment 03'], 'alert', 'xxl', 'secondary');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'warning xl secondary\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'warning\'%c,%c\'xl\'%c,%c\'secondary\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('warning xl secondary', ['Comment 01', 'Comment 02', 'Comment 03'], 'warning', 'xl', 'secondary');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'info lg secondary\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'info\'%c,%c\'lg\'%c,%c\'secondary\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('info lg secondary', ['Comment 01', 'Comment 02', 'Comment 03'], 'info', 'lg', 'secondary');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'success md secondary\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'success\'%c,%c\'md\'%c,%c\'secondary\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('success md secondary', ['Comment 01', 'Comment 02', 'Comment 03'], 'success', 'md', 'secondary');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'successfull sm secondary\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'successfull\'%c,%c\'sm\'%c,%c\'secondary\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('successfull sm secondary', ['Comment 01', 'Comment 02', 'Comment 03'], 'successfull', 'sm', 'secondary');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'important xs secondary\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'important\'%c,%c\'xs\'%c,%c\'secondary\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('important xs secondary', ['Comment 01', 'Comment 02', 'Comment 03'], 'important', 'xs', 'secondary');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'log xxs secondary\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'log\'%c,%c\'xxs\'%c,%c\'secondary\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('log xxs secondary', ['Comment 01', 'Comment 02', 'Comment 03'], 'log', 'xxs', 'secondary');
    console.groupEnd();


    console.groupCollapsed('%cmakeComment(\'default xxs badge\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'default\'%c,%c\'xxs\'%c,%c\'badge\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('default xxs badge', ['Comment 01', 'Comment 02', 'Comment 03'], 'default', 'xxs', 'badge');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'bw xs badge\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'bw\'%c,%c\'xs\'%c,%c\'badge\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('bw xs badge', ['Comment 01', 'Comment 02', 'Comment 03'], 'bw', 'xs', 'badge');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'wb sm badge\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'wb\'%c,%c\'sm\'%c,%c\'badge\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('wb sm badge', ['Comment 01', 'Comment 02', 'Comment 03'], 'wb', 'sm', 'badge');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'error md badge\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'error\'%c,%c\'md\'%c,%c\'badge\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('error md badge', ['Comment 01', 'Comment 02', 'Comment 03'], 'error', 'md', 'badge');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'fail lg badge\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'fail\'%c,%c\'lg\'%c,%c\'badge\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('fail lg badge', ['Comment 01', 'Comment 02', 'Comment 03'], 'fail', 'lg', 'badge');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'danger xl badge\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'danger\'%c,%c\'xl\'%c,%c\'badge\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('danger xl badge', ['Comment 01', 'Comment 02', 'Comment 03'], 'danger', 'xl', 'badge');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'alert xxl badge\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'alert\'%c,%c\'xxl\'%c,%c\'badge\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('alert xxl badge', ['Comment 01', 'Comment 02', 'Comment 03'], 'alert', 'xxl', 'badge');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'warning xl badge\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'warning\'%c,%c\'xl\'%c,%c\'badge\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('warning xl badge', ['Comment 01', 'Comment 02', 'Comment 03'], 'warning', 'xl', 'badge');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'info lg badge\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'info\'%c,%c\'lg\'%c,%c\'badge\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('info lg badge', ['Comment 01', 'Comment 02', 'Comment 03'], 'info', 'lg', 'badge');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'success md badge\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'success\'%c,%c\'md\'%c,%c\'badge\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('success md badge', ['Comment 01', 'Comment 02', 'Comment 03'], 'success', 'md', 'badge');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'successfull sm badge\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'successfull\'%c,%c\'sm\'%c,%c\'badge\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('successfull sm badge', ['Comment 01', 'Comment 02', 'Comment 03'], 'successfull', 'sm', 'badge');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'important xs badge\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'important\'%c,%c\'xs\'%c,%c\'badge\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('important xs badge', ['Comment 01', 'Comment 02', 'Comment 03'], 'important', 'xs', 'badge');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'log xxs badge\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'log\'%c,%c\'xxs\'%c,%c\'badge\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('log xxs badge', ['Comment 01', 'Comment 02', 'Comment 03'], 'log', 'xxs', 'badge');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'default xxs badgeInverted\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'default\'%c,%c\'xxs\'%c,%c\'badgeInverted\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('default xxs badgeInverted', ['Comment 01', 'Comment 02', 'Comment 03'], 'default', 'xxs', 'badgeInverted');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'bw xs badgeInverted\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'bw\'%c,%c\'xs\'%c,%c\'badgeInverted\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('bw xs badgeInverted', ['Comment 01', 'Comment 02', 'Comment 03'], 'bw', 'xs', 'badgeInverted');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'wb sm badgeInverted\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'wb\'%c,%c\'sm\'%c,%c\'badgeInverted\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('wb sm badgeInverted', ['Comment 01', 'Comment 02', 'Comment 03'], 'wb', 'sm', 'badgeInverted');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'error md badgeInverted\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'error\'%c,%c\'md\'%c,%c\'badgeInverted\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('error md badgeInverted', ['Comment 01', 'Comment 02', 'Comment 03'], 'error', 'md', 'badgeInverted');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'fail lg badgeInverted\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'fail\'%c,%c\'lg\'%c,%c\'badgeInverted\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('fail lg badgeInverted', ['Comment 01', 'Comment 02', 'Comment 03'], 'fail', 'lg', 'badgeInverted');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'danger xl badgeInverted\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'danger\'%c,%c\'xl\'%c,%c\'badgeInverted\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('danger xl badgeInverted', ['Comment 01', 'Comment 02', 'Comment 03'], 'danger', 'xl', 'badgeInverted');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'alert xxl badgeInverted\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'alert\'%c,%c\'xxl\'%c,%c\'badgeInverted\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('alert xxl badgeInverted', ['Comment 01', 'Comment 02', 'Comment 03'], 'alert', 'xxl', 'badgeInverted');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'warning xl badgeInverted\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'warning\'%c,%c\'xl\'%c,%c\'badgeInverted\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('warning xl badgeInverted', ['Comment 01', 'Comment 02', 'Comment 03'], 'warning', 'xl', 'badgeInverted');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'info lg badgeInverted\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'info\'%c,%c\'lg\'%c,%c\'badgeInverted\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('info lg badgeInverted', ['Comment 01', 'Comment 02', 'Comment 03'], 'info', 'lg', 'badgeInverted');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'success md badgeInverted\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'success\'%c,%c\'md\'%c,%c\'badgeInverted\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('success md badgeInverted', ['Comment 01', 'Comment 02', 'Comment 03'], 'success', 'md', 'badgeInverted');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'successfull sm badgeInverted\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'successfull\'%c,%c\'sm\'%c,%c\'badgeInverted\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('successfull sm badgeInverted', ['Comment 01', 'Comment 02', 'Comment 03'], 'successfull', 'sm', 'badgeInverted');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'important xs badgeInverted\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'important\'%c,%c\'xs\'%c,%c\'badgeInverted\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('important xs badgeInverted', ['Comment 01', 'Comment 02', 'Comment 03'], 'important', 'xs', 'badgeInverted');
    console.groupEnd();

    console.groupCollapsed('%cmakeComment(\'log xxs badgeInverted\', [\'Comment 01\', \'Comment 02\', \'Comment 03\'], %c\'log\'%c,%c\'xxs\'%c,%c\'badgeInverted\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-weight:bold;font-size:12px', 'font-size:10px;font-weight:bold;color:orange');
    makeComment('log xxs badgeInverted', ['Comment 01', 'Comment 02', 'Comment 03'], 'log', 'xxs', 'badgeInverted');
    console.groupEnd();

    console.groupEnd();

    console.groupEnd();
  }

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

    debug && console.groupCollapsed('%cprocessing...', 'font-size:10px;font-weight:bold;');

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

    debug && console.groupEnd();

    debug && console.log(`%cinput: %c${originalStr}%c\noutput: %c${newStr}`, 'font-size:10px;font-weight:bold;', 'color:darkorange;font-weight:bold;', 'font-size:10px;font-weight:bold;', 'color:cyan;font-weight:bold;');

    return newStr;
  }

  /**
   * @function sanitizeStrTest
   * Tests each scenery of sanitizeTest() application. If debug is set as true, the function will be tested and its results will be printed at console.
   * 
   * @returns console messages showing each step of the function.
   */
  sanitizeStrTest = () => {

    console.groupCollapsed('%cHelper Function\n%csanitizeStr()', 'font-size:10px;font-weight:bold;', 'margin:8px 0;padding:2px 4px;background-color:#f0dc5b;color:#1f1d0f;border: 2px solid #1f1d0f;font-size:12px;font-weight:bold;line-height:16px;border-radius:8px;');

    console.groupCollapsed('%csanitizeStr(\'AáeÊiîOõuü!!   ! Teste  34/*-+:"?__---_R#\', %c\'default\'%c)', 'font-size:10px;font-weight:bold;color:orange', 'color:cyan;font-style:italic;font-size:10px', 'font-size:10px;font-weight:bold;color:orange');
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
    console.groupCollapsed('%cdebug mode: %cON', 'font-size:10px;font-weight:bold;', 'color:cyan;font-size:12px;font-weight:bold;');

    // Helper functions
    console.groupCollapsed('%ctype: %cHelper Functions', 'font-size:10px;font-weight:bold;', 'font-size:10px;font-weight:bold;color:#f0dc5b;font-size:12px;font-weight:bold;');
    sanitizeStrTest();
    makeCommentTest();
    console.groupEnd();

    console.groupEnd();
  }

}