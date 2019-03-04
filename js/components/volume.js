/* This module was module number 554 in the old packed code. It was referenced in the old code using `require(<module name>)` by the following module names:
* ./components/volume
*/
'use strict';
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor))
        throw new TypeError('Cannot call a class as a function');
}
function _possibleConstructorReturn(self, call) {
    if (!self)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return !call || ('object' != typeof call && 'function' != typeof call)
        ? self
        : call;
}
function _inherits(subClass, superClass) {
    if ('function' != typeof superClass && null !== superClass)
        throw new TypeError(
            'Super expression must either be null or a function, not ' +
                typeof superClass
        );
    (subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: !1,
            writable: !0,
            configurable: !0,
        },
    })),
        superClass &&
            (Object.setPrototypeOf
                ? Object.setPrototypeOf(subClass, superClass)
                : (subClass.__proto__ = superClass));
}
Object.defineProperty(exports, '__esModule', { value: !0 });
var _createClass = (function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                (descriptor.enumerable = descriptor.enumerable || !1),
                    (descriptor.configurable = !0),
                    'value' in descriptor && (descriptor.writable = !0),
                    Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            return (
                protoProps &&
                    defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
            );
        };
    })(),
    React = require('react'),
    Volume = (function(_React$Component) {
        function Volume(props) {
            _classCallCheck(this, Volume);
            var _this = _possibleConstructorReturn(
                this,
                (Volume.__proto__ || Object.getPrototypeOf(Volume)).call(
                    this,
                    props
                )
            );
            return (
                props.store.subscribe(function() {
                    var state = props.store.getState();
                    _this.setState({ returnTicker: state.returnTicker });
                }),
                (_this.state = { query: null }),
                (_this.self = props.self),
                (_this.tokens = props.tokens),
                (_this.bases = props.bases),
                (_this.getToken = props.getToken),
                (_this.selectTokenAndBase = props.selectTokenAndBase),
                (_this.handleSearchKeyUp = function(e) {
                    console.log('Search field update', e.target.value);
                    _this.setState({
                        query:
                            e.target.value.length > 0 ? e.target.value : null,
                    });
                }),
                _this
            );
        }
        return (
            _inherits(Volume, React.Component),
            _createClass(Volume, [
                {
                    key: 'shouldComponentUpdate',
                    value: function(nextProps, nextState) {
                        return (
                            JSON.stringify(this.state.returnTicker) !==
                                JSON.stringify(nextState.returnTicker) ||
                            this.state.query !== nextState.query
                        );
                    },
                },
                {
                    key: 'render',
                    value: function() {
                        var _this2 = this;
                        if (!this.state.returnTicker)
                            return React.createElement(
                                'div',
                                {
                                    style: {
                                        color: '#fff',
                                        padding: '12px',
                                        width: '100%',
                                        textAlign: 'center',
                                    },
                                },
                                React.createElement('i', {
                                    className:
                                        'fa fa-spinner fa-pulse fa-3x fa-fw',
                                }),
                                React.createElement(
                                    'span',
                                    { className: 'sr-only' },
                                    'Loading...'
                                )
                            );
                        for (
                            var pairVolumes = [], j = 0;
                            j < this.bases.length;
                            j += 1
                        ) {
                            for (var i = 0; i < this.tokens.length; i += 1) {
                                var token = this.getToken(this.tokens[i]),
                                    base = this.getToken(this.bases[j]);

                                if (token && base) {
                                    var rt = Object.values(
                                            this.state.returnTicker
                                        ).find(function(t) {
                                            return t.tokenAddr === token.addr;
                                        }),
                                        pairVolume = {
                                            token: token,
                                            base: base,
                                            quoteVolume: 0,
                                            baseVolume: 0,
                                        };
                                    rt &&
                                        Object.assign(pairVolume, {
                                            quoteVolume: Math.round(
                                                rt.quoteVolume
                                            ),
                                            baseVolume: rt.baseVolume,
                                            bid: rt.bid,
                                            ask: rt.ask,
                                            last: rt.last,
                                        }),
                                        pairVolumes.push(pairVolume);
                                }
                            }
                        }
                        console.log(
                            'pairVolumes.length before filter',
                            pairVolumes.length
                        );
                        if (this.state.query) {
                            console.log('Filter ticker with', this.state.query);
                            var query = this.state.query,
                                queryRe = new RegExp(this.state.query, 'i');
                            pairVolumes = pairVolumes.filter(function(x) {
                                return (
                                    (token = x.token),
                                    token.name.match(queryRe) ||
                                        token.fullName.match(queryRe) ||
                                        token.addr.toLowerCase() ===
                                            query.toLowerCase()
                                );
                            });
                        } else {
                            console.log('Filter by volume');
                            pairVolumes = pairVolumes.filter(function(x) {
                                return x.baseVolume > 0.001;
                            });
                        }
                        console.log(
                            'pairVolumes.length after filter',
                            pairVolumes.length
                        );
                        return (
                            pairVolumes.sort(function(a, b) {
                                return (
                                    b.baseVolume - a.baseVolume ||
                                    (a.token.name > b.token.name ? 1 : -1)
                                );
                            }),
                            React.createElement(
                                'div',
                                null,
                                React.createElement(
                                    'div',
                                    { className: 'row-box nav-header' },
                                    React.createElement('input', {
                                        type: 'search',
                                        className: 'form-control',
                                        placeholder:
                                            'Search for name, symbol, or address',
                                        onKeyUp: this.handleSearchKeyUp.bind(
                                            this
                                        ),
                                    })
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'row-box height5 scroll' },
                                    React.createElement(
                                        'div',
                                        { className: 'tab-content' },
                                        this.bases.map(function(base, index) {
                                            return React.createElement(
                                                'div',
                                                {
                                                    key: index,
                                                    role: 'tabpanel',
                                                    className:
                                                        'tab-pane' +
                                                        (0 === index
                                                            ? ' active'
                                                            : ''),
                                                    id: 'volume_' + base.name,
                                                },
                                                React.createElement(
                                                    'div',
                                                    null,
                                                    React.createElement(
                                                        'div',
                                                        null,
                                                        pairVolumes
                                                            .filter(function(
                                                                x
                                                            ) {
                                                                return (
                                                                    x.base
                                                                        .name ===
                                                                    base.name
                                                                );
                                                            })
                                                            .map(function(
                                                                pairVolume,
                                                                i
                                                            ) {
                                                                return React.createElement(
                                                                    'div',
                                                                    {
                                                                        className:
                                                                            'ticker-row',
                                                                        key: i,
                                                                        onClick: function(
                                                                            e
                                                                        ) {
                                                                            e.preventDefault();
                                                                            _this2.selectTokenAndBase.bind(
                                                                                _this2.self,
                                                                                pairVolume
                                                                                    .token
                                                                                    .addr,
                                                                                pairVolume
                                                                                    .base
                                                                                    .addr
                                                                            )();
                                                                            history.pushState(
                                                                                null,
                                                                                null,
                                                                                '/#!/trade/' +
                                                                                    (pairVolume
                                                                                        .token
                                                                                        .name ||
                                                                                        pairVolume
                                                                                            .token
                                                                                            .addr) +
                                                                                    '-' +
                                                                                    (pairVolume
                                                                                        .base
                                                                                        .name ||
                                                                                        pairVolume
                                                                                            .base
                                                                                            .addr)
                                                                            );
                                                                        },
                                                                        style: {
                                                                            cursor:
                                                                                'pointer',
                                                                            padding:
                                                                                '4px 6px',
                                                                        },
                                                                    },
                                                                    React.createElement(
                                                                        'div',
                                                                        {
                                                                            style: {
                                                                                display:
                                                                                    'flex',
                                                                                justifyContent:
                                                                                    'space-between',
                                                                            },
                                                                        },
                                                                        React.createElement(
                                                                            'div',
                                                                            {
                                                                                className:
                                                                                    'name',
                                                                                style: {
                                                                                    'font-weight':
                                                                                        'bold',
                                                                                },
                                                                            },
                                                                            '' +
                                                                                pairVolume
                                                                                    .token
                                                                                    .name
                                                                        ),
                                                                        React.createElement(
                                                                            'div',
                                                                            null,
                                                                            pairVolume.last
                                                                                ? pairVolume.last.toFixed(
                                                                                      9
                                                                                  )
                                                                                : 'n/a'
                                                                        )
                                                                    ),
                                                                    React.createElement(
                                                                        'div',
                                                                        {
                                                                            style: {
                                                                                color:
                                                                                    'rgba(255, 255, 255, 0.82)',
                                                                            },
                                                                        },
                                                                        '' +
                                                                            (pairVolume
                                                                                .token
                                                                                .fullName ||
                                                                                pairVolume
                                                                                    .token
                                                                                    .name)
                                                                    ),
                                                                    React.createElement(
                                                                        'div',
                                                                        {
                                                                            style: {
                                                                                display:
                                                                                    'flex',
                                                                                justifyContent:
                                                                                    'space-between',
                                                                            },
                                                                        },
                                                                        React.createElement(
                                                                            'div',
                                                                            {
                                                                                style: {
                                                                                    display:
                                                                                        'flex',
                                                                                    'flex-direction':
                                                                                        'column',
                                                                                },
                                                                            },
                                                                            React.createElement(
                                                                                'div',
                                                                                null,
                                                                                pairVolume.bid
                                                                                    ? 'Bid ' +
                                                                                      pairVolume.bid.toFixed(
                                                                                          9
                                                                                      )
                                                                                    : 'n/a'
                                                                            ),
                                                                            React.createElement(
                                                                                'div',
                                                                                null,
                                                                                pairVolume.ask
                                                                                    ? 'Ask ' +
                                                                                      pairVolume.ask.toFixed(
                                                                                          9
                                                                                      )
                                                                                    : 'n/a'
                                                                            )
                                                                        ),
                                                                        React.createElement(
                                                                            'div',
                                                                            null,
                                                                            parseFloat(
                                                                                pairVolume.baseVolume
                                                                            ).toFixed(
                                                                                3
                                                                            ) +
                                                                                ' Ξ Daily'
                                                                        )
                                                                    )
                                                                );
                                                            })
                                                    )
                                                )
                                            );
                                        })
                                    )
                                )
                            )
                        );
                    },
                },
            ]),
            Volume
        );
    })();
            exports.default = Volume;