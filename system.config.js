System.config({
        packages: {
          js: {
            format: 'register',
            defaultExtension: 'js'
          }
        }
      });
      System.import('js/boot')
        .then(null, console.error.bind(console));