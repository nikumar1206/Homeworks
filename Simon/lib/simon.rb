class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @seq = []
    @sequence_length = 1
    @game_over = false

  end

  def play
    until game_over
      take_turn
      # system("clear")
    end
    if game_over
      return game_over_message
      system("quit")
    end
  end

  def take_turn
    show_sequence
    require_sequence
    if !game_over
      @sequence_length += 1
      round_success_message
    end

  end

  def show_sequence
    add_random_color
    @seq.each do |color|
      puts color
      sleep 2
      system("clear")
    end
  end

  def require_sequence
    puts "try repeating the colors! u got this!! (use space between colors)"
    user_input = gets.chomp
    if user_input != @seq.join(' ')
      game_over = true
      return
    end
  end

  def add_random_color
    @seq << COLORS.sample
  end

  def round_success_message
    puts "you are doing great. keep at it!"
  end

  def game_over_message
    puts "you lost monkey"
    puts @sequence_length.to_s
  end

  def reset_game
    @seq = []
    @game_over = false
    # @sequence_length = 1
  end

end
new_game = Simon.new
new_game.play