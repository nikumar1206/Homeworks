class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @name1 = name1
    @name2 = name2
    @cups = Array.new(14) { [] }
    place_stones
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    @cups.each_with_index do |ele, i|
      if i != 6 && i != 13
        @cups[i] = [:stone] * 4
      end
    end
    @cups
  end

  def valid_move?(start_pos)
    if !(0..14).include?(start_pos)
      raise "Invalid starting cup"
    elsif @cups[start_pos].empty?
      raise "Starting cup is empty"
    end
  end

  def make_move(start_pos, current_player_name)
    i = 1
    if (0..5).include?((start_pos + i) % 13)
      index = (start_pos + i) % 13 - 1
    else
      index = (start_pos + i) % 13
    end

    until @cups[start_pos].empty?
      if ((current_player_name == @name1) && index == 13) || ((current_player_name == @name2) && index == 6)
        next
      else
        @cups[index]  << @cups[start_pos].pop
      end
      i += 1
    end
    render
    next_turn(index)
  end

  def next_turn(ending_cup_idx)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
    if ending_cup_idx == 6 || ending_cup_idx == 13
      return :prompt
    elsif @cups[ending_cup_idx].length == 1
      return :switch
    else
      return ending_cup_idx
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    @cups[0..5].all? { |cup| cup.empty? } || @cups[7..12].all? { |cup| cup.empty? }
  end

  def winner
    if @cups[6].length > @cups[13].length
      return @name1
    elsif @cups[13].length > @cups[6].length
      return @name2
    else
      return :draw
    end

  end
end
