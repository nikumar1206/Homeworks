class GraphNode
    attr_accessor :val, :neighbors
    def initialize(val)
        @val = val
        @neighbors = []
        visited_nodes = Set.new()
    end

    def bfs(start_node, end_node_val)
    end

end