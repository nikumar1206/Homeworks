class Stack
    def initialize
        @stack = []
    end

    def push(el)
      @stack << el
    end

    def pop
      @stack.pop
    end

    def peek
      @stack[-1]
    end
end

class Queue
    def initialize
        @queue = []
    end

    def enqueue(el)
        @queue << el
    end

    def dequeue
        @queue.shift
    end

    def peek
        @queue[0]
    end

end

class Map
    def initialize
        @my_map = []
    end

    def set(key, val)
        @my_map.each_with_index do |subarr|
            if subarr[0] == key
                subarr[1] = val
                return
            end
        end
        @my_map << [key, val]
    end


    def get(key)
        @my_map.each do |subarr|
            if subarr[0] == key
                return subarr[1]
            end
        end
        raise "couldn't find key. my bad"
    end

    def delete(key)
        val = get(key)
        @my_map.delete([key,val])
    end

    def show
        @my_map
    end
end
