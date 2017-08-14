class astar {
    constructor() {}
    
    diagonalSuccessors(xN, xS, xE, xW, N, S, E, W, grid, rows, cols, result, i) {
        if (xN) {
            if(xE && (!grid[N][E] || grid[N][E] == 0)) {
                result[i++] = {
                    x: E,
                    y: N
                };
            }

            if(xW && (!grid[N][W] || grid[N][W] == 0)) {
                result[i++] = {
                    x: W,
                    y: N
                }
            }
        }

        if (xS) {
            if(xE && (!grid[S][E] || grid[S][E] == 0)) { 
                result[i++] = {
                    x: E,
                    y: S
                }
            }

            if(xW && (!grid[S][W] || grid[S][W] == 0)) { 
                result[i++] = {
                    x: W,
                    y: S
                }
            }
        }

        return result
    }

    diagonalSuccessorsFree(xN, xS, xE, xW, N, S, E, W, grid, rows, cols, result, i) {
        xN = N > -1;
        xS = S < rows;
        xE = E < cols;
        xW = W > -1;

        if (xE) {
            if(xN && (!grid[N][E] || grid[N][E] == 0)) {
                result[i++] = {
                    x: E,
                    y: N
                }
            }

            if(xS && (!grid[S][E] || grid[S][E] == 0)) {
                result[i++] = {
                    x: E,
                    y: S
                }
            }
        }

        if (xW) {
            if(xN && (!grid[N][W] || grid[N][W] == 0)) {
                result[i++] = {
                    x: W,
                    y: N
                }
            }

            if(xS && (!grid[S][W] || grid[S][W] == 0)) {
                result[i++] = {
                    x: W,
                    y: S
                }
            }
        }
        
        return result
    }

    nothingToDo(xN, xS, xE, xW, N, S, E, W, grid, rows, cols, result, i) {
        return result
    }

    successors(find, x, y, grid, rows, cols) {
        let N = y - 1
          , S = y + 1
          , E = x + 1
          , W = x - 1
          , xN = N > -1 && !grid[N][x]
          , xS = S < rows && !grid[S][x]
          , xE = E < cols && !grid[y][E]
          , xW = W > -1 && !grid[y][W]
          , result = []
          , i = 0;

        if(xN){
            result[i++] = {
                x: x,
                y: N
            }
        }

        if(xE) {
            result[i++] = {
                x: E,
                y: y
            }
        }

        if(xS) {
            result[i++] = {
                x: x,
                y: S
            }
        }

        if(xW) {
            result[i++] = {
                x: W,
                y: y
            }
        }

        return find(xN, xS, xE, xW, N, S, E, W, grid, rows, cols, result, i)
    }

    diagonal(start, end, f1, f2) {
        return f2(f1(start.x - end.x), f1(start.y - end.y))
    }

    euclidean(start, end, f1, f2) {
        let x = start.x - end.x
          , y = start.y - end.y;
        return f2(x * x + y * y)
    }

    manhattan(start, end, f1, f2) {
        return f1(start.x - end.x) + f1(start.y - end.y)
    }

    AStar(grid, start, end, f) {
        let cols = grid[0].length 
        let rows = grid.length 
        let limit = cols * rows
        let f1 = Math.abs
        let f2 = Math.max
        let list = {}
        let result = []
        let open = [{
            x: start[0],
            y: start[1],
            f: 0,
            g: 0,
            v: start[0] + start[1] * cols
        }];
        let length = 1; 

        let adj, distance, find, i, j, max, min, current, next;

        end = {
            x: end[0],
            y: end[1],
            v: end[0] + end[1] * cols
        };

        switch (f) {
        case "Diagonal":
            find = this.diagonalSuccessors;
        case "DiagonalFree":
            distance = diagonal;
            break;
        case "Euclidean":
            find = this.diagonalSuccessors;
        case "EuclideanFree":
            f2 = Math.sqrt;
            distance = this.euclidean;
            break;
        default:
            distance = this.manhattan;
            find = this.nothingToDo;
            break
        }

        find || (find = diagonalSuccessorsFree);

        do {
            max = limit;
            min = 0;

            for (i = 0; i < length; ++i) {
                if ((f = open[i].f) < max) {
                    max = f;
                    min = i
                }
            }

            current = open.splice(min, 1)[0];

            if (current.v != end.v) {
                --length;
                next = this.successors(find, current.x, current.y, grid, rows, cols);

                for (i = 0, j = next.length; i < j; ++i) {
                    (adj = next[i]).p = current;
                    adj.f = adj.g = 0;
                    adj.v = adj.x + adj.y * cols;
                    if (!(adj.v in list)) {
                        adj.f = (adj.g = current.g + distance(adj, current, f1, f2)) + distance(adj, end, f1, f2);
                        open[length++] = adj;
                        list[adj.v] = 1
                    }
                }
            } else {
                i = length = 0;
                do {
                    result[i++] = {
                        x: current.x,
                        y: current.y
                    }
                } while (current = current.p);result.reverse()
            }
        } while (length);
        
        return result;
    }
}

export let AStar = new astar();