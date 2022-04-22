def sluggish_octopus(arr)
    max = ''
    arr.each do |ele|
        arr.each do |ele2|
            if ele.length > ele2.length && ele.length > max.length
                max = ele
            end
        end
    end
    max
end
p sluggish_octopus(['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'])

def quicksort(arr)
    return arr if arr.length <= 1
    pivot = arr[0]
    left_arr = arr[1..-1].select { |ele| ele.length < pivot.length }
    right_arr = arr[1..-1].select { |ele| ele.length >= pivot.length }
    sorted_arr = quicksort(left_arr) + [pivot] + quicksort(right_arr)
end

def dominant_octopus(arr)
    quicksort(arr).last
end
p dominant_octopus(['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'])

def clever_octopus(arr)
    max = ''
    arr.each do |ele|
        if ele.length > max.length
            max = ele
        end
    end
    max
end
p clever_octopus(['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'])



def slow_dance(direction, title_arr)
    title_arr.each_with_index do |ele, i|
        if ele == direction
            return i
        end
    end
end

tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]
p slow_dance("up", tiles_array)
p slow_dance("right-down", tiles_array)

def fast_dance(direction, structure)
    structure[direction]
end

new_tiles_data_structure = {"up" => 0, "right-up" => 1, "right"=> 2, "right-down"=> 3, "down"=> 4, "left-down"=> 5, "left"=> 6,  "left-up"=> 7 }
p fast_dance("up", new_tiles_data_structure)
p fast_dance("right-down", new_tiles_data_structure)

