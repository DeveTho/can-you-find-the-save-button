(function($) {
  $(function() {
    var buttonTileIndex = Math.floor((Math.random() * 100));

    for (var i = 0; i < 25; i++) {
      for (var j = 0; j < 4; j++) {
        var bgClass = '';

        switch (j) {
          case 0:
            bgClass = 'bg-success';
            break;
          case 1:
            bgClass = 'bg-info';
            break;
          case 2:
            bgClass = 'bg-warning';
            break;
          case 3:
            bgClass = 'bg-danger';
            break;
        }

        var $tile = $('<div class="tile ' + bgClass + '">Click me!</div>');
        $tile.data('index', j + (i * 4));
        $tile.data('background-class', bgClass);
        
        $tile.click(function() {
          var $this = $(this);

          if ($this.data('index') === buttonTileIndex) {
            var $saveButton = $('<button class="btn btn-primary" type="button">Save</button>');
            $saveButton.click(function() {
              alert('Damn... You won! :D');
            });

            $this.empty();
            $this.removeClass($this.data('background-class'));
            $this.html($saveButton);

            window.setTimeout(function() {
              $this.empty();
              $this.addClass($this.data('background-class'));
              $this.text('Click me!');
            }, 100);
          } else {
            $this.text('Not here!');
            $this.addClass('text-danger');

            window.setTimeout(function() {
              $this.removeClass('text-danger');
              $this.text('Click me!');
            }, 1000);
          }
        });

        $('#tiles-container').append($tile);
      }
    }
  });
})(jQuery);