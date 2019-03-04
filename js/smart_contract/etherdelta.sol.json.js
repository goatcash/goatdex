/* This module was module number 571 in the old packed code. It was referenced in the old code using `require(<module name>)` by the following module names:
* ./smart_contract/etherdelta.sol.json
*/
module.exports = [
    {
        constant: !1,
        inputs: [
            { name: 'tokenGet', type: 'address' },
            { name: 'amountGet', type: 'uint256' },
            { name: 'tokenGive', type: 'address' },
            { name: 'amountGive', type: 'uint256' },
            { name: 'expires', type: 'uint256' },
            { name: 'nonce', type: 'uint256' },
            { name: 'user', type: 'address' },
            { name: 'v', type: 'uint8' },
            { name: 'r', type: 'bytes32' },
            { name: 's', type: 'bytes32' },
            { name: 'amount', type: 'uint256' },
        ],
        name: 'trade',
        outputs: [],
        payable: !1,
        type: 'function',
    },
    {
        constant: !1,
        inputs: [
            { name: 'tokenGet', type: 'address' },
            { name: 'amountGet', type: 'uint256' },
            { name: 'tokenGive', type: 'address' },
            { name: 'amountGive', type: 'uint256' },
            { name: 'expires', type: 'uint256' },
            { name: 'nonce', type: 'uint256' },
        ],
        name: 'order',
        outputs: [],
        payable: !1,
        type: 'function',
    },
    {
        constant: !0,
        inputs: [{ name: '', type: 'address' }, { name: '', type: 'bytes32' }],
        name: 'orderFills',
        outputs: [{ name: '', type: 'uint256' }],
        payable: !1,
        type: 'function',
    },
    {
        constant: !1,
        inputs: [
            { name: 'tokenGet', type: 'address' },
            { name: 'amountGet', type: 'uint256' },
            { name: 'tokenGive', type: 'address' },
            { name: 'amountGive', type: 'uint256' },
            { name: 'expires', type: 'uint256' },
            { name: 'nonce', type: 'uint256' },
            { name: 'v', type: 'uint8' },
            { name: 'r', type: 'bytes32' },
            { name: 's', type: 'bytes32' },
        ],
        name: 'cancelOrder',
        outputs: [],
        payable: !1,
        type: 'function',
    },
    {
        constant: !1,
        inputs: [{ name: 'amount', type: 'uint256' }],
        name: 'withdraw',
        outputs: [],
        payable: !1,
        type: 'function',
    },
    {
        constant: !1,
        inputs: [
            { name: 'token', type: 'address' },
            { name: 'amount', type: 'uint256' },
        ],
        name: 'depositToken',
        outputs: [],
        payable: !1,
        type: 'function',
    },
    {
        constant: !0,
        inputs: [
            { name: 'tokenGet', type: 'address' },
            { name: 'amountGet', type: 'uint256' },
            { name: 'tokenGive', type: 'address' },
            { name: 'amountGive', type: 'uint256' },
            { name: 'expires', type: 'uint256' },
            { name: 'nonce', type: 'uint256' },
            { name: 'user', type: 'address' },
            { name: 'v', type: 'uint8' },
            { name: 'r', type: 'bytes32' },
            { name: 's', type: 'bytes32' },
        ],
        name: 'amountFilled',
        outputs: [{ name: '', type: 'uint256' }],
        payable: !1,
        type: 'function',
    },
    {
        constant: !0,
        inputs: [{ name: '', type: 'address' }, { name: '', type: 'address' }],
        name: 'tokens',
        outputs: [{ name: '', type: 'uint256' }],
        payable: !1,
        type: 'function',
    },
    {
        constant: !1,
        inputs: [{ name: 'feeMake_', type: 'uint256' }],
        name: 'changeFeeMake',
        outputs: [],
        payable: !1,
        type: 'function',
    },
    {
        constant: !0,
        inputs: [],
        name: 'feeMake',
        outputs: [{ name: '', type: 'uint256' }],
        payable: !1,
        type: 'function',
    },
    {
        constant: !1,
        inputs: [{ name: 'feeRebate_', type: 'uint256' }],
        name: 'changeFeeRebate',
        outputs: [],
        payable: !1,
        type: 'function',
    },
    {
        constant: !0,
        inputs: [],
        name: 'feeAccount',
        outputs: [{ name: '', type: 'address' }],
        payable: !1,
        type: 'function',
    },
    {
        constant: !0,
        inputs: [
            { name: 'tokenGet', type: 'address' },
            { name: 'amountGet', type: 'uint256' },
            { name: 'tokenGive', type: 'address' },
            { name: 'amountGive', type: 'uint256' },
            { name: 'expires', type: 'uint256' },
            { name: 'nonce', type: 'uint256' },
            { name: 'user', type: 'address' },
            { name: 'v', type: 'uint8' },
            { name: 'r', type: 'bytes32' },
            { name: 's', type: 'bytes32' },
            { name: 'amount', type: 'uint256' },
            { name: 'sender', type: 'address' },
        ],
        name: 'testTrade',
        outputs: [{ name: '', type: 'bool' }],
        payable: !1,
        type: 'function',
    },
    {
        constant: !1,
        inputs: [{ name: 'feeAccount_', type: 'address' }],
        name: 'changeFeeAccount',
        outputs: [],
        payable: !1,
        type: 'function',
    },
    {
        constant: !0,
        inputs: [],
        name: 'feeRebate',
        outputs: [{ name: '', type: 'uint256' }],
        payable: !1,
        type: 'function',
    },
    {
        constant: !1,
        inputs: [{ name: 'feeTake_', type: 'uint256' }],
        name: 'changeFeeTake',
        outputs: [],
        payable: !1,
        type: 'function',
    },
    {
        constant: !1,
        inputs: [{ name: 'admin_', type: 'address' }],
        name: 'changeAdmin',
        outputs: [],
        payable: !1,
        type: 'function',
    },
    {
        constant: !1,
        inputs: [
            { name: 'token', type: 'address' },
            { name: 'amount', type: 'uint256' },
        ],
        name: 'withdrawToken',
        outputs: [],
        payable: !1,
        type: 'function',
    },
    {
        constant: !0,
        inputs: [{ name: '', type: 'address' }, { name: '', type: 'bytes32' }],
        name: 'orders',
        outputs: [{ name: '', type: 'bool' }],
        payable: !1,
        type: 'function',
    },
    {
        constant: !0,
        inputs: [],
        name: 'feeTake',
        outputs: [{ name: '', type: 'uint256' }],
        payable: !1,
        type: 'function',
    },
    {
        constant: !1,
        inputs: [],
        name: 'deposit',
        outputs: [],
        payable: !0,
        type: 'function',
    },
    {
        constant: !1,
        inputs: [{ name: 'accountLevelsAddr_', type: 'address' }],
        name: 'changeAccountLevelsAddr',
        outputs: [],
        payable: !1,
        type: 'function',
    },
    {
        constant: !0,
        inputs: [],
        name: 'accountLevelsAddr',
        outputs: [{ name: '', type: 'address' }],
        payable: !1,
        type: 'function',
    },
    {
        constant: !0,
        inputs: [
            { name: 'token', type: 'address' },
            { name: 'user', type: 'address' },
        ],
        name: 'balanceOf',
        outputs: [{ name: '', type: 'uint256' }],
        payable: !1,
        type: 'function',
    },
    {
        constant: !0,
        inputs: [],
        name: 'admin',
        outputs: [{ name: '', type: 'address' }],
        payable: !1,
        type: 'function',
    },
    {
        constant: !0,
        inputs: [
            { name: 'tokenGet', type: 'address' },
            { name: 'amountGet', type: 'uint256' },
            { name: 'tokenGive', type: 'address' },
            { name: 'amountGive', type: 'uint256' },
            { name: 'expires', type: 'uint256' },
            { name: 'nonce', type: 'uint256' },
            { name: 'user', type: 'address' },
            { name: 'v', type: 'uint8' },
            { name: 'r', type: 'bytes32' },
            { name: 's', type: 'bytes32' },
        ],
        name: 'availableVolume',
        outputs: [{ name: '', type: 'uint256' }],
        payable: !1,
        type: 'function',
    },
    {
        inputs: [
            { name: 'admin_', type: 'address' },
            { name: 'feeAccount_', type: 'address' },
            { name: 'accountLevelsAddr_', type: 'address' },
            { name: 'feeMake_', type: 'uint256' },
            { name: 'feeTake_', type: 'uint256' },
            { name: 'feeRebate_', type: 'uint256' },
        ],
        payable: !1,
        type: 'constructor',
    },
    { payable: !1, type: 'fallback' },
    {
        anonymous: !1,
        inputs: [
            { indexed: !1, name: 'tokenGet', type: 'address' },
            { indexed: !1, name: 'amountGet', type: 'uint256' },
            { indexed: !1, name: 'tokenGive', type: 'address' },
            { indexed: !1, name: 'amountGive', type: 'uint256' },
            { indexed: !1, name: 'expires', type: 'uint256' },
            { indexed: !1, name: 'nonce', type: 'uint256' },
            { indexed: !1, name: 'user', type: 'address' },
        ],
        name: 'Order',
        type: 'event',
    },
    {
        anonymous: !1,
        inputs: [
            { indexed: !1, name: 'tokenGet', type: 'address' },
            { indexed: !1, name: 'amountGet', type: 'uint256' },
            { indexed: !1, name: 'tokenGive', type: 'address' },
            { indexed: !1, name: 'amountGive', type: 'uint256' },
            { indexed: !1, name: 'expires', type: 'uint256' },
            { indexed: !1, name: 'nonce', type: 'uint256' },
            { indexed: !1, name: 'user', type: 'address' },
            { indexed: !1, name: 'v', type: 'uint8' },
            { indexed: !1, name: 'r', type: 'bytes32' },
            { indexed: !1, name: 's', type: 'bytes32' },
        ],
        name: 'Cancel',
        type: 'event',
    },
    {
        anonymous: !1,
        inputs: [
            { indexed: !1, name: 'tokenGet', type: 'address' },
            { indexed: !1, name: 'amountGet', type: 'uint256' },
            { indexed: !1, name: 'tokenGive', type: 'address' },
            { indexed: !1, name: 'amountGive', type: 'uint256' },
            { indexed: !1, name: 'get', type: 'address' },
            { indexed: !1, name: 'give', type: 'address' },
        ],
        name: 'Trade',
        type: 'event',
    },
    {
        anonymous: !1,
        inputs: [
            { indexed: !1, name: 'token', type: 'address' },
            { indexed: !1, name: 'user', type: 'address' },
            { indexed: !1, name: 'amount', type: 'uint256' },
            { indexed: !1, name: 'balance', type: 'uint256' },
        ],
        name: 'Deposit',
        type: 'event',
    },
    {
        anonymous: !1,
        inputs: [
            { indexed: !1, name: 'token', type: 'address' },
            { indexed: !1, name: 'user', type: 'address' },
            { indexed: !1, name: 'amount', type: 'uint256' },
            { indexed: !1, name: 'balance', type: 'uint256' },
        ],
        name: 'Withdraw',
        type: 'event',
    },
            ];