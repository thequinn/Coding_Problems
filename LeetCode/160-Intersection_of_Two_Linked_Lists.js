/*
160. Intersection of Two Linked Lists
*/

var getIntersectionNode = function(headA, headB) {
    let rootA = headA;
    let rootB = headB;
    let lena = 0;
    let lenb = 0;
    while (rootA) {
        lena++;
        rootA = rootA.next;
    }
    while (rootB) {
        lenb++;
        rootB = rootB.next;
    }
    rootA = headA;
    rootB = headB;
    const len = Math.min(lena, lenb);
    if (lena > len) {
        for (let i = len; i < lena; i++) {
            rootA = rootA.next;
        }
    }
    if (lenb > len) {
        for (let i = len; i < lenb; i++) {
            rootB = rootB.next;
        }
    }
    for (let i = 0; i < len; i++) {
        if (rootA === rootB) return rootA;
        rootA = rootA.next;
        rootB = rootB.next;
    }
    return null;
};
