import Node from './Node.js';

export default class SimpleList{

    constructor(){
        this.head = null;
    }

    add(data){
        const newNode = new Node(data);

        if(this.head == null){
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next !== null){
                current = current.next;
            }
            current.next = newNode;
        }
    }

    
    remove(data) {
        if (this.head === null) {
            return false;
        } else if (this.head.data === data) {
            this.head = this.head.next;
            return true;
        } else {
            let current = this.head;
            while (current.next !== null) {
                if (current.next.data === data) {
                    current.next = current.next.next;
                    return true;
                } else {
                    current = current.next;
                }
            }
            return false;
        }
    }

    
    isEmpty(){
        return this.head == null;
    }


    exist(data){
        let current = this.head;
        while(current != null){
            if(current.data == data){
                return true;
            }
            current = current.next;
        }
        return false;
    }


    print() {
        let current = this.head;
        let result = '';
        while (current !== null) {
            result += current.data + ' -> ';
            current = current.next;
        }
        result += 'null';
        console.log(result);
    }
    
    
}

