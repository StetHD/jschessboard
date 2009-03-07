/* ***** BEGIN LICENSE BLOCK *****
 *
 * Copyright 2008-2009 Jean-Christophe Sirot <sirot@xulfactory.org>
 *
 * This file is part of jsChessboard.
 *
 * jsChessboard is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 *
 * jsChessboard is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
 * more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * jsChessboard. If not, see http://www.gnu.org/licenses/.
 *
 * ***** END LICENSE BLOCK *****  */

var Chessboard = function() {
    var images = {
        wk: "data:image/png;base64,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",
        wq: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAOOAAADjgBT3J5yAAAAAd0SU1FB9kCGAkPCwkTNZ8AAAlASURBVGje7Zl/UFzVFcc/u7A/wCy7/Ay2BAIEqhlj0xoLnVR27IgNqTViojadMv2B9seUzCTTpDGYSZxUGZxpp02Tav5ItXUcTad0cP8gamJQRp3Gwei2ISYubsQGZAfIsoVuCBA5/aPvPt++vMVFQTtTz8ydd9+533vvOfede+6558Fn9P9DVwD7gbNAH3AQqPhfE7IQ8MzSvhh4HRBTOaUpmIxyAe8noUA1ENaEmgZeBq61wG0HZNWqVfLaa69JMBiU6upqpcwvLfAVQDcwA1wCjgNfXSglvgFctFjlPqDAhD0KyMMPPyyKDhw4oPAvmrBXAcMW4w4BpakKZ5+DIj8CXFVVVTz//PMEAgFKS0sBSoAtJmwM4PTp0zojFAqp6qAJ+10gb+nSpRw7doxnnnmGqqoqgHxg10J8kRFADh06pK/y/fffr1bvFRP2e4A4nU6pr6+XO+64Q9xut8LeacK+DMijjz6qj3vo0CGFfTtV4dJNX2ct8HVgVDOP44b2KJAbiUR0xuCgvrj/No3bAcxMTU3Z29vbzXP+zfR+AeCdd96xGve8CfsV4JtABvACcAyYMiv0pIWd/sKAeQiQ3Nxc2bJli9xzzz2SmZmpcPssFukVi/GGLXC/B8ThcMi2bdukqalJcnNzFf5eA26z5gyM4/3VvD32AOJyueTWW28Vv9+vgO8DNQZln7MQTiz2CMAjFrjnLHA/TzJmp0HIOsWvra2Vuro6cTgcCrfHONgJQPbv36/baV1dnQLuNR1yJy0m/bWFgDstcC0WuF9b4KaBqw2Y3wLS0NCgy/fAAw8o7Emj1/ocwNVXf9C3srJSVcsNA8aB31kI8yUL3pAFr8eCt9KCtx84bXhfBrBixQqdYZA1z9jxICAbNmyQSCQiJ0+elNLSUqXxI6ZJsi1W8HyKJnO3Be68Be6LVma6fPlyCYVC0t/fL2vWrFHYg0ZgrdpIdrvdPOh2i8kvAEaXKkCxCfOQhYD3mTBLVJvBcQiwyCpSAMRmsxllnNFk103rKPAtIDozM4PFZGaKAtTW1hp515kwBQDZ2dksW7bMGIMZ6cuqsn79eqNJmt25vkgigiZjVJP5qPlk79Bs3XzyrreIAGIAhYWF1NQop8Z3rBRZtWoVN954YzJFNgL4/X7KysoUr8+ESdNkMNI5TdaOZCHKP4EzFpHu10w8N8DixYu5+27d7NeZBC0HuP766/H7/foeNSlaD7Bp0ybS09ONghvJb7EAL2iyzhprBS14PzO9ewGKi4vZsGEDPp8PwAH8UGtfpO4eFopkaPUfAM4lS5Zw2223UVJSkjC26SA00+uphC3fVhvL6/UaN6BRmSlAnn32WRERaWpqUpizgA1Yrfr19/eLiEh5ebnCVGmYMCAtLS0iItLV1WWMehXtSCJLTSqKlKkOu3fvlvz8fNV5ShMwQ7W/+eabIiISDofF5XIp3M1AEyAVFRX6AdbY2Kjaf6p5GnG73TI8PCwiIn19fap90nBteB+Q/Px82bNnj9FTZaUSxp/VIl3ee+89AoEAbrdbmU6bdn9AmRZAWVkZ27ZtU+wfqwOysbHxA0P/wLyuA34CsHHjRvLy/nueFRUVkZaWBuAElmuxn93lctHe3s7IyIjqHwbGUo2KO9QBJCLy1FNPic1mUysSBiQnJ0eMFI/Hpbi4WIUXfenp6RKJRPT2gYEBNUYfMF1QUKCbnSKtvxhuofLEE0+IiEhVVZVq+/Nc7h671eETjUZFROTBBx9MONxWrlwpZgoEArrCt99++2XtDQ0NAkhaWpp0dnZe1n7DDTckzLFr1y4REZmcnDSa7r1zUUSPNjs6OvSJHn/8ccnIyBBA1q1bJ1bU0tIiDodDTp06dVnbuXPnJDMzU1pbWy37KkWdTqccOHBA57/66qtGBW+eiyK5qmNzc3PCZMFgUMrLy2XTpk2SjDo7O+XSpUsyMDAgJ06ckO7ubunv75fp6Wk5evRo0n47d+6UoqIiOX78eAJ/3759RkXyrQS2zaLM20C53+/nxRcT8wWxWIyenh6Ki4s5cuQIZ8+eJRKJMDg4yODgIJFIhOHhYczhjs1mIy8vj8LCQq688kr9WVJSwk033UQ0GqWsrIz8/ERZ6+vrefrppwH6k4RMs9KTgGRkZMjQ0JC+Om+99ZZs375drrnmGklyIfrIpaKiQjZv3izBYFCfr6enxxgkBpIJO9sX2Qz8BuCuu+5i69attLa20t7eftlKp6WlsWLFCiorK/F6vXi9XrKysvS63W4nHo8Tj8cZHBykt7eX3t5ewuEwU1NTlpOvXbuWHTt2sHfvXtra2hT7viSXs1kVWa5lBi2pqqqKNWvWsHr1aqqrq/F4PHNOy8zMzPDuu+/S29tLKBSira2Nrq6u2bp8AQh9lBRQl5UJHDx4UBaKDh8+nMz0/pJqOsiK7tRSQksVIyMjA4fDQXd3N+Pj44yNjTE2NpZQVyUej+tmaLfbcbvdZGZm4vF4dLMzl1gshs/nIxaLGeU4qQWZH4uu0i4x8imVIeNCfpTNbr4THNHioA8lp9OJz+fD5/ORnZ2NzWZjdHSUWCxGLBZjcnIy1UWc0hKGr8yXImiB3iMALpeL1tZW8vLyyM7OThDa5/ORmZk560ATExPEYrEE5UZHRxkdHaW5uZnx8XEF/T7wp/nO/Tq0K6YA8thjj837Rm9vb/+wZN68ZOOnjcm6N954Y96z5D09CWmvPy6UIhjvyTabbd4V0e4jiv41l77pc5yrQVVycnIIBAKcP3+eaDQ661NEyM3NJScnZ9andoEz/o85vBD/R7I18/qk3O4l4PML8UVqrfBer5eKigoWLVqkF4/Hk/But9u5cOHCZWVsbIxQKEQ4HMYiMZgGNJqz7fNBfzCu2NatW+XMmTMyMzPzsb3VxMSEBINBaW5uNn+Vvy+EafWrCXJycmR8fHze3e/FixelqKjIqMhEqg4pVdfjVWlSPc+/bBm33HILNTU1FBQU4PF48Hg8ZGVl4fF4cDqtg4Dp6Wk9NlNlZGSEl156iY6OjoQfqBplAePzpUi6lkotT/XzOZ1OXTmbzaYLPYfwBOAf2v8TmU/TWgL8SjtLFtpjDWj/JZemKpztY7jia7VSqb2r4tOeV2hhjVOzc9HMc0j7KZrsGdH+Vgmf0Wf06dN/AN7h/NfE93vdAAAAAElFTkSuQmCC",
        wb: "data:image/png;base64,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",
        wn: "data:image/png;base64,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",
        wr: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAOOAAADjgBT3J5yAAAAAd0SU1FB9kCGQo5AzQu9eQAAANbSURBVGje7Zm7axtZFIc/GSkP5Fe0MFOoGoiE3Kj0gnfBYCWKWJSknF5/gVyYdMa4deFKarbaJsV2YSGEhahRYyZgmMqCDXKRFZFJQJYt4gkyuWnuwDiRrNGMRlZ25wcXoZlz7j3fuY85GkGoH0u/Al1ADGkHwJLD/gnw+Rp7Ie8/cfgkgDfX2HdlHJ6VA3ojghLA79L+ngsIJ8w96fenC/uejGeo5q659wcQdwG8ID9vA7dcJumWtAdYdGEfl/F4UtvOSLVaFaenp1daKpWys/UeeAXUbHtd18XBwcF3Tdd1Z5Zr0u8DIFKp1HdjVKtVp33bF0g2mxWDlMlkhi6Fcrk80KdcLg/1yWQyA32y2awrkLlRNHNzg010XR+8BuJxisXiwHvFYpF4PD5Wf8PG/1ZRr9O1s7NDPp/n/Pz8ynVN00in04NPj1yOw8NDjo+Pr26yhQXW1tZ8Ha9RP85eBk+n00NB/WjkvLXbbVqt1o08xFqtFu1223c/z4AvgFBVVdTrdTFN1et1oaqqvdG/yHg8SwcsQMRiMVGpVKYCUalURCwWsyEsGYdv/QJ8tI/JUqkkLMsKBMCyLFEqlZzH8kc5/khFXMLcB14CKYDV1VU2NzeJRCIT2w9CCPb39zEMw770D/Ab8HbSe+8noO6ylvLb6nK8wHQbeB4wxHNHHeZaXtbGMtAB2NjYYHt723d2dnd3qdVqOKro06k+EBVFYX193TeIoijBPxB/FIUgIUgIEoKEICFICPJfAvFVa3U6HUzT9B1Ep9O5EfjlgMv45WktrZ8DTpSn/sf9PZID/gLuLi4usre3x9LSku/Iu90uW1tbnJ2dAVwAj4HXQWUqB3wCRCKREIZhTPTFg2EYIpFI2MvrEyP+RvCqBzaEoijCNM1A3qKYpikURXHCPJgkxEMbIplMikajEeg7rUajIZLJpBPm4SQg8nLNCk3TRLPZnMoLumazKTRNs2EuZByeN3seeAHcAVhZWUFV1amd8ScnJxwdHdlfLeAp8Pe4/TyyZ2KG2oWMa6wZuQDuRKNR5ufnb7z86PV6XF5e2jNzdxxfAYhCoSBmQYVCwTkz/+Oisd/v0+12bzzIfr/vuUQRM5z8yDhL698ZhRg7rvvAuxk7ft/JuEKFmqa+Ah2gRTqtH9sFAAAAAElFTkSuQmCC",
        wp: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAANywAADcsB0EsExQAAAAd0SU1FB9kCGAkFEQ6eJG8AAAQpSURBVGje7ZpNSGNXFMf/SWOexsSPzgiCiERbLKRis5ghMKOg1RERdVOVuiuU0hZ3baELKTgMBFy5sLQLyVIURouhKtJRVzLjZDGioxUU6WgsNTb4UVLTMc3pYt4NJyFIzNy89yjzh0DO43Le/b1z7r3n3veANzKWTDny2wHgQwAeAC4A2wCeAHgM4CGAmNEfjAXA9wDoip8fQL6RIYoAPOKddrlc1N/fT263OxVmEUChUUE+Ex0tKCiglZUV4vL5fGSz2TjMN0YFeSg6OTY2Runk9Xo5yLIRId4CcCI6GQqF0oJsbm5ykJdqOkqRWZIfAmATRiAQSNtob2+Pm3kyZ01ZIHEAL4Th8/nSNpqenubm7wDOjJheP4i0ycvLo7Ozs6S0ikajVFJSwlPrR6MOdhefYmdmZpJApqamOMS/AN6ReXOzRD+3AUTFhcPDw6QG6+vr3Iyo7U1GisT7AJ7xaPT19VEkEkmKyMnJCXV1daUujE8BvGcEiDoAIdExs9lMo6OjdJWGh4fJZDJxmD/UtNRNCoCg6JDVaqWJiQnKRJOTk6QoCofZV/3pos95mszOztJ1tLS0lJpmX+gF8lh0oqamhrJRbW0tB3mi16yVmD47OjqyctDe3s7NGj1ArABuCqOlpSUrJ62trdy8qfrVFOQlgD+FsbOzk12BRsTN31S/mqfWr+LP/Px8Vg7W1ta4+VSvwf6lGKiKotDq6uq1BnooFKLi4mI+2L/SC8SqVrwEgOx2Oy0uLmYEsb29TXV1dRziEECFnoviJ3wtUBSF5ubmroQYHx8nu93OIc4B1BuhTOkCcCA6VlhYSIFAIC3EyMhI6iJ4CqDVKNWvH8BHAP4BgEgkgoWFhbQNd3d3ufmXevb1ixGiYQXwnQpBAKiqqopOT0/TRmR/f5/Kysp4RKIAHvBtsh7yAHjOU6Wzs5PC4fCVYyQYDFJDQ0Nqir0AcEsPiPvqLi9Rvnu9XorH4xnNWrFYjAYHB8lsNnOYCwAfawnxLX+aDoeD/H5/VkXj8vIyVVRUpEbnay0gPuU3dTqdtLGxQa+jcDhM3d3dHCSuzoQ507sALsUNGxsb6fj4mGQoHo9TT09P6tqSsy1w4ki0vr6eotEoydTFxQV5PB4OM5+rGYoAkM1mo62tLcqFDg4OUrfAd2WD/CScDw0NUS41MDDAQX6WCWFRjzZJURQ6OjrKKUgwGORR+VvmocQd8YR6e3tJC7W1tfGoNMuqte4lzkRd2hw/NTU1Je2IZYEkSuzq6mpNQJqbk4LwgSyQxCGD0+nUBMTtdsNkShwLvy0dRKuIWCwWOBwOYd6QCpKfn4/y8nLNCrrS0tJrRcSSiU8AqKysxPn5uWYgRUWJ14vFmbTP5P3EZYbAuVIMr943vnZqXeq8C72UNUb0/m7E8N+tvNH/Wv8BwzMALd0F56YAAAAASUVORK5CYII=",
        bk: "data:image/png;base64,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",
        bq: "data:image/png;base64,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",
        bb: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAOOAAADjgBT3J5yAAAAAd0SU1FB9kCGQsGDP2NqH4AAAQ1SURBVGje3ZrBbxtFFMZ/sWPXVuWAXANOOCDMHigp6QKRIEKCQ4AakBBCVooULoUDJyqEQCAkDnCoBEgof0IEyoHmkIQLBQFai7oJilB7oKUqLiQltVxZuMEO9SZyPRw862xDbO/a3o3Nk568sscz88178703bxack+eA00Ae+BM4CbwJBOgRCQPfAKKOngT6egHI6+aJ+/1+4ff7d4L5oBeAnDImnEgkRLFYFOvr62JiYsIM5GwvAMkaE15aWhKGLCwsmIFc6/SgHgeAXDAe5ufna1+mUilzm196wSLvmPfD6OioGBkZ2blH3uoFIH7g1wasdQHwdbtreYCngX8atFkH7u9mSzwJXG5gCbPeBL4A7u0mAB4ZF8oWQZh1C/gY6N9rEHcB37UAYKd+DxzYKxD32HAlK/o7cNBtEDFgtdnkQqGQUFVVqKoqQqGQFTArwJ1ugdgHnLOyyvF4vBbZ4/G4VcuclmM4Tr8ngMMOLtTjwPtOA4kCx5s1UhQFVVWJxWLbvhiLoaoqiqJYGec4MOCkW71rxT00TRP1RNM0qy72tpMWibtIKE/YaWw3EN1npdH09DSapqEoCpOTkwDMzMyQTqdZWVmxOtYDTq7SdTuxoUXWMvS6k66VctG1Uk66lgY8b7VxPp8nmUzWnm3KD06u0iMdTEma6UNOZ7rXXACRcegYfou87AKQF+xOqtVC2RzwovmL8fFxEokEkUiEcDiM1+vd9Y/lcplsNksmk2F2dpbl5eX/sDdwzC1GiQJ/GSvo8/lEPp8XdiWTyQiv12u2xGqrqUk7pctX5HG1WicNhxkbG2NgYIBAIEAwGCQYDBIIVEu9uq5TKpXQdR1d19nY2GBxcZFcLmd0IYCnnGarerLUwX1xrp2JtHtWjtRqQH4/iqIwNDRENBqlv7+/6R5Jp9NsbW0ZPw1LtyrsxVFXAMLj8TTMeOtJMpkUHo+nLbbqhEVeMh4qlQpTU1PkcjmGh4cZHBykr297+21ublIoFCgWi7XPtbU15ubmqFQqt5Af8JXbFvnRgfhx3m0QYVlkcyIYRtwuymUdAJF1IzXZKYck55c6AKAk+zq0l9XGfcAzwJkWAJwBjrRS/rET2X2AIj+LUgty0CGpCvCsBLK/xTnckGXXr4FLwFWZ/W7KuBKS+rdMYWyt8AnZkegyvQh8ZqUaOSgpUHS5ngVua+Rmp3oAhKFJ6rx88EYPgTD0092A/OzQYJ8Dsw71vWvG/DDVG6RODfKHpFZDXpVs1Kn+bwKP1dsn77XZ+Q1Zj/qoDh37gKPAt1RftmlnrE8axZE+yedHmrBbGbhC9ZbpsnTLZaovApRtUP3dMpo/aNKDNH+D6KIsF+mNAuIdwE9s37heAeaB30y6Kk3rVB53gOr95GFgFBgDHpW/n5dHiEtWOrsd+BJ4jS64cZXyoawR7Of/LP8CuosaQN0AbCQAAAAASUVORK5CYII=",
        bn: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAOOAAADjgBT3J5yAAAAAd0SU1FB9kCGQsGJiY2YagAAATmSURBVGje7ZldTGNFFMf/tHxEWKABQrAEYpTYZKUskZiQDRg+TDQgKw00vvuyQQXDg6IEX9REIfHjbRejJBYSE6GoQRR9QVwhMTRA4hqBBSmEYiSklO6yLf06vtyOt+NtaXvvpX3Yk5zk9p7TM/ObmTtzZgZ4IOklWpXiPgPgGwAEwJZu0G8AuAtgGcAXAAYAPCrhdxVAQIAgAF+r2GBJyXVR5cIaBDAFoF7w0QGwS/h9kE4gJokKivUWgB+i2EIAKtIF5Oo5IOfpm+kCclkmyG01K5eZgG+OzLKeALAA4BKAOwD+BLAGYFaYHC5MrsnskWhqB/AKgIcuCmRWJZCw/g2gSW2IKmHmSaqS+fn5ZDKZqKGhgQoKCmL5+gG8qibIR3Ja22KxkFi2t7epv7+fcnJyov3nMwAapSHyALjkgFRXV9Po6Citr69HANntduro6Ij2v08uYkUnjUZDOp0uYaiWlhZaXFxkMKFQiAYHB6P5v6wkyG1x8IqKCpqamiKn00lERDabjbKyshIG6uvro2AwyIAmJiak4gQAPKsERLM4sNFopP39/YjhsbS0RBkZGUkNObPZTF6vl8WyWCxSsVwA9HJBrOKg8/PzERDBYJDq6upkTbtNTU3kcrlYzOHhYSm/r+RAVIrT8fLycgqFQqzA4+NjamtrU2QNMRqN5HA4WOze3l4pv+eSBXlfHKiwsJA8Hg+dnp7SzMwMVVVVKbogVlZW0uHhIRER+Xw+qqmp4X22k1n98wA4+cKKiopizf2y1WQysV6x2Wyk1Wp5n/cSBelVOR2JquPj4wxmYGCAt58BKEtkH/9XqkB0Oh2bGT0eDxkMBt7n9XhBzKmCCGtnZyfrlenpad7+R7wgv6UaRKPR0M7ODhER+f1+0uv1vM9T5x0HNQIYSvVWlIiQl5eH1tZWaDQauN1uLCwsiF38AL6PFePbVPdGWMvKysjv9xMR0d7eHj+DOWPtWA1y9hxqqNVqZd+KRJYckYOJc/6XAGSk0/mTxWJhz11dXby5Ltr/thRszTMAHwK4KSdOaWkp65GNjQ3ebpWCqA07GAwGMpvNciCsAB4T4v4st1HsdjuDKS4u5g8t/ifvAqDGxkYKBALkcDiSKfQfAE9zSeeZXJDJyUkG0t7ezttL+G+kCwBGRkag1WoxNjaW6HB2C9npL6J3gwCy5X4ny8vL7Lm+vp43P8m/+BEADQ0NUU9PD2VnZyfSave5ngCAx5XoDQDU3NzMemRubo63v8WDXOGuAuJVP4DnuVhZwp2IIhOHXq9nIGtra7z9plQvvihULJGC3jlvHyNXc3NzGcju7i5v/zLakHxBOPGLp5ANidW1WbgzUXRh9Pl8RETkdrt522ys7ysLQDeAn4QeCgC4AWCFC8Ifbz6cQCMkpOGdIxFRZmam2PZrvJPGJQCPiKdoQT+X8P1OrVRlc3OTgZSUlIhtv8d7rXBP0PDY3xf2zTc4vzYA7WqlKi6Xiz3rdDocHR2FfxYmcz9yH8CoxPtsAB+rmXOdnJz8d6GTGVHlAqmkMVl5TVg3VBOn0xlr6CsCUgbgbbWz4K2tLfbs9XrFJq9SINcA5KsNsrq6CgA4ODiA3R6RK95VqoxPL2qT1d3dTbW1tfz7O0qBrKR4F7mixNDKAVCd4k3kPSVArghZQFqAPJB0k38BGx/TXl5+rMMAAAAASUVORK5CYII=",
        br: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAOOAAADjgBT3J5yAAAAAd0SU1FB9kCGQsHAO0g1RQAAAHaSURBVGje7Zq/T8JAGIYfFDVxIv4BTQeDxBkTw+IMq4M1Lg7GyMAfwsBuXEgMiQmJYSHMnZhZxYWgAyOTC78cvCaF8KPtXSnIvcmX0PS73vtc6dfjDtDaPhWByZzoAmczuTfAYEG+EwOR59Y50FuQX1QBUVphqu3KNYDhinwnhiLf0eeK/JIMRNqDoZ4rP+URwomUq23PQ356mdl4wHOOTgBbfD72OVCvwI/rOqsUR9LsMh0AVwHbXqh8kPf+S0XSIBokAh0BdZ8lNayoCz+BdQjUIoaoCR/SigPViCCqCl4RU9oHKmuGqIh+QykM5TVBlP0WophPmBjwDDwCGIZBJpORHqFms0m323UOX4AnARSqTGfkLMuaqJBlWe67Ye70e0SqIti2TTablTbRarUigTdDftB3+6ulQTSIBtEgGkSDRDZFSSaT5HI5aRONRoN2ux3dFGXbZ7+XIQ9UoOv7/WF1Dbzxt1RKIpHANE1p551Oh36/7xwOgFvgPayR8rL3oSrm7aEo0R3e9z5UxVD0q0z3wCii5aCR6F9aD8A44gW6sfARWPkNgHDD5INAFDYEYDYKfstv6GtKEorpSaMG0SDqQL431O+X3wanotEmld4Ppv/2oaW1Dv0Cw42jSTIHjOcAAAAASUVORK5CYII=",
        bp: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAOOAAADjgBT3J5yAAAAAd0SU1FB9kCGQsHEYeQ9eYAAAHeSURBVGje7dnPK8NxHMfxpx/blB81CzlROK6cjVykieRGuYkc5Kjc1A5u+A84+AMcXKS4OeygpShL2Y1yW9TsB3Owb0nh+/3u/d3nvdmnXrfvZ/s+9vn9GdSLrtLg0ef2A9NABBgBfEC8lBPgqhp+nCiQBoo/5BWY1Y5YBwq/IKzkgXmtiD4bgK/JAR1SX94oCJly+LwPmKwFCKUJQR0k5KJOt0bIrYs6SY2QMxd1LjTOWs1AysGsdQ80aWyRAHDt4PkboEVbaywBDw7XkWKpzooWxK4LwPfsmUbEBBBWNk0heoGMIOQFCJoY7GvCg7UVWDUBGfaglSMmIIMeQIZMQAoeQNImICkPIJcmIHFNkHJKO/AkOP1mgAGTZ3QpyKLJld0HHAogtrXstyaAOxeAR2AZgfs1qW18qLQyu9n6B4SPE64XsFOBrpUoZ1UvtyW3+Lw1lBrsb8BGpRH7goDvOQD81Y6wcuz1uNmpAMJKzCtEGHsX1FJ5B2a8gJxXEGElKd3F5gwgrCxIQo4MQhJSCD/wbBBSBHoktijjQJvhHcSoBCSqYFM6JgEZUAAJS0C6FEA6awUS/DcQOyezNwUHn3f++FPIzgvmFbRIXqJrZRVAshKQnAKIhneoF0flA0CU3JLw+cFsAAAAAElFTkSuQmCC"
	};
    
    var ChessGame = function ChessGame() {
        this.playerWhite = true;
        this.pieces = {};
        this.moveFct = {
            P : this._movePawn,
            N : this._moveKnight,
            B : this._moveBishop,
            R : this._moveRook,
            Q : this._moveQueen,
            K : this._moveKing
        };
    };
    
    var parser = {
        parse: function(move) {
            var mre = new RegExp("^([KQBNR]?)([a-h]?)([1-8]?)(x?)([a-h][1-8])");
            if (mre.test(move)) {
                var m = mre.exec(move);
                return parser.makeMove(m[1], m[2], m[3], m[4], m[5]);
            } else {
                throw("Move parsing failed");
            }
        },

        makeMove: function(piece, fromCol, fromRow, capture, dest) {
            var move = {};
            if (piece !== "") {
                move.piece = piece;
            } else {
                move.piece = "P";
            }
            if (fromCol !== "") {
                move.fromCol = fromCol.charCodeAt(0) - 96;
            }
            if (fromRow !== "") {
                move.fromRow = fromRow.charCodeAt(0) - 48;
            }
            if (capture !== "") {
                move.capture = true;
            } else {
                move.capture = false;
            }
            move.dest = dest;
            return move;
        }
    };

    var utils = {
        col: function(sq) {
            var col = sq.charCodeAt(0) - 96;
            if (col < 1 || col > 8) {
                throw("Invalid position");
            }
            return col;
        },

        row: function(sq) {
            var row = sq.charCodeAt(1) - 48;
            if (row < 1 || row > 8) {
                throw("Invalid position");
            }
            return row;
        },

        toSquare: function(row, col) {
            if (row < 1 || row > 8 || col < 1 || col > 8) {
                return undefined;
            }
            return String.fromCharCode(96 + row, 48 + col);
        }
    };

    var g = {
        drawBoard: function(game, id) {
            var canvas = document.getElementById(id);
            var ratio = canvas.height / 400;
            var ctx = canvas.getContext("2d");
            g.initBoard(ctx, ratio);
            for (var sq in game.pieces) {
	        if (game.pieces[sq] !== undefined) {
                    g.drawPiece(ctx, ratio, game.pieces[sq], sq);
                }
            }
        },

        initBoard: function(ctx, ratio) {
            var sz = 50 * ratio;
            ctx.fillStyle = "rgb(0,127,0)";
            for (var i = 0; i < 8; i++) {
                for (var j = 0; j < 8; j++) {
                    if ((i + j) % 2 === 1) {
                        ctx.fillRect (i*sz, j*sz, sz, sz);
                    }
                }
            }
            ctx.fillStyle = "rgb(251,246,229)";
            for (i = 0; i < 8; i++) {
                for (j = 0; j < 8; j++) {
                    if ((i + j) % 2 === 0) {
                        ctx.fillRect (i*sz, j*sz, sz, sz);
                    }
                }
            }
        },

        drawPiece: function(ctx, ratio, piece, sq) {
            /* for browsers which do not support delayed image loading
			var sz = ratio * 50;
            x = (sq.charCodeAt(0) - 97) * sz;
            y = (8 * sz) - (sq.charCodeAt(1) - 48) * sz;
            var img = new Image();
            img.src = piece.g;
            ctx.drawImage(img, x, y, sz, sz);
            */
            var mkdraw = function (ctx, img, x, y, s) {
                return function() { ctx.drawImage(img, x, y, s, s); };
            };
            var sz = ratio * 50;
            var x = (sq.charCodeAt(0) - 97) * sz;
            var y = (8 * sz) - (sq.charCodeAt(1) - 48) * sz;
            var img = new Image();
            img.src = images[piece.code];
            img.onload = mkdraw(ctx, img, x, y, sz);
        }
    };
    
    var Piece = function(code) {
        this.checkValidity(code);
        this.code = code;
    };
    
    Piece.prototype.type = function() {
        return this.code.charAt(1).toUpperCase();
    };
    
    Piece.prototype.isWhite = function() {
        return this.code.charAt(0).toLowerCase() === "w";
    };

    Piece.prototype.isBlack = function() {
        return this.code.charAt(0).toLowerCase() === "b";
    };
  
    Piece.prototype.checkValidity = function(code) {
        var regexp = new RegExp("^[wb][kqbnrp]");
        if (!regexp.test(code)) {
            throw("Invalide piece code: " + code);
        }
    };

    ChessGame.prototype.initGame = function() {
        var add = function(game) {
            return function(piece, sq) {
                game.pieces[sq] = new Piece(piece);
            };
        }(this);

        add("wk", "e1");
        add("bk", "e8");

        add("wq", "d1");
        add("bq", "d8");

        add("wb", "c1");
        add("wb", "f1");
        add("bb", "c8");
        add("bb", "f8");

        add("wn", "b1");
        add("wn", "g1");
        add("bn", "b8");
        add("bn", "g8");

        add("wr", "a1");
        add("wr", "h1");
        add("br", "a8");
        add("br", "h8");

        add("wp", "a2");
        add("wp", "b2");
        add("wp", "c2");
        add("wp", "d2");
        add("wp", "e2");
        add("wp", "f2");
        add("wp", "g2");
        add("wp", "h2");
        add("bp", "a7");
        add("bp", "b7");
        add("bp", "c7");
        add("bp", "d7");
        add("bp", "e7");
        add("bp", "f7");
        add("bp", "g7");
        add("bp", "h7");
    };

    ChessGame.prototype._isPlayerColor = function(p) {
        return this.playerWhite ? p.isWhite() : p.isBlack();
    };

    ChessGame.prototype._isEmpty = function(sq) {
        var p = this.pieces[sq];
        return p === undefined;
    };

    ChessGame.prototype._move = function(from, to) {
        //alert("from: " + from + ", to: " + to);
        var p = this.pieces[from];
        this.pieces[to] = p;
        this.pieces[from] = undefined;
    };

    ChessGame.prototype._checkCapture = function(move) {
        if (move.capture) {
            //var otherColor = this.playerWhite ? "black" : "white";
            var p = this.pieces[move.dest];
            if (p !== undefined && !this._isPlayerColor(p)) {
                return;
            } else {
                throw("No piece to capture in " + move.dest);
            }
        }
    };

    ChessGame.prototype._checkEmpty = function(move) {
        if (!move.capture) {
            var p = this.pieces[move.dest];
            if (p !== undefined) {
                throw("Non empty square: " + move.dest);
            }
        }
    };

    ChessGame.prototype._moveCasteling = function(longCasteling) {
        if (this.playerWhite) {
            if (longCasteling) {
                if (!this._isEmpty("b1") &&
                    !this._isEmpty("c1") &&
                    !this._isEmpty("d1"))
                {
                    throw("Long casteling not authorized");
                }
                this._move("e1", "c1");
                this._move("a1", "d1");
            } else {
                if (!this._isEmpty("f1") &&
                    !this._isEmpty("g1"))
                {
                    throw("Short casteling not authorized");
                }
                this._move("e1", "g1");
                this._move("h1", "f1");
            }
        } else {
            if (longCasteling) {
                if (!this._isEmpty("b8") &&
                    !this._isEmpty("c8") &&
                    !this._isEmpty("d8"))
                {
                    throw("Long casteling not authorized");
                }
                this._move("e8", "c8");
                this._move("a8", "d8");
            } else {
                if (!this._isEmpty("f8") &&
                    !this._isEmpty("g8"))
                {
                    throw("Short casteling not authorized");
                }
                this._move("e8", "g8");
                this._move("h8", "f8");
            }
        }
    };

    ChessGame.prototype._movePawn = function(move) {
        this._checkCapture(move);
        this._checkEmpty(move);
        if (this.playerWhite) {
            if (!move.capture) {
                var c = utils.col(move.dest);
                var r = utils.row(move.dest);
                var sq = utils.toSquare(c, r - 1);
                var p = this.pieces[sq];
                if (p !== undefined && p.type() === "P" && p.isWhite()) {
                    this._move(sq, move.dest);
                    return;
                }
                if (r === 4 && !p) {
                    sq = utils.toSquare(c, r - 2);
                    p = this.pieces[sq];
                    if (p !== undefined && p.type() === "P" && p.isWhite()) {
                        this._move(sq, move.dest);
                        return;
                    }
                }
            } else {
                sq = utils.toSquare(move.fromCol, utils.row(move.dest) - 1);
                p = this.pieces[sq];
                var p2 = this.pieces[move.dest];
                if (p !== undefined && p.type() === "P" && p.isWhite() &&
                        p2 !== undefined && p2.isBlack())
                {
                    this._move(sq, move.dest);
                    return;
                }
            }
        } else {
            if (!move.capture) {
                c = utils.col(move.dest);
                r = utils.row(move.dest);
                sq = utils.toSquare(c, r + 1);
                p = this.pieces[sq];
                if (p !== undefined && p.type() === "P" && p.isBlack()) {
                    this._move(sq, move.dest);
                    return;
                }
                if (r === 5 && !p) {
                    sq = utils.toSquare(c, r + 2);
                    p = this.pieces[sq];
                    if (p && p.type() === "P" && p.isBlack()) {
                        this._move(sq, move.dest);
                        return;
                    }
                }
            } else {
                sq = utils.toSquare(move.fromCol, utils.row(move.dest) + 1);
                p = this.pieces[sq];
                p2 = this.pieces[move.dest];
                if (p !== undefined && p.type() === "P" && 
                        p.isBlack() && p2 !== undefined && p2.isWhite())
                {
                    this._move(sq, move.dest);
                    return;
                }
            }
        }
    };

    ChessGame.prototype._moveKnight = function(move) {
        this._checkCapture(move);
        this._checkEmpty(move);
        var cl = utils.col(move.dest);
        var rw = utils.row(move.dest);
        for (var i = -1; i <= 1; i+=2) {
            for (var j = -1; j <= 1; j+=2) {
                for (var k = 1; k <= 2; k++) {
                    var c = cl + (k * i);
                    var r = rw + (3 - k)* j;
                    var sq = utils.toSquare(c, r);
                    var p = this.pieces[sq];
                    if (p !== undefined && p.type() === "N" &&
                        this._isPlayerColor(p))
                    {
                        var from = true;
                        if (move.fromCol !== undefined &&
                            move.fromCol !== utils.col(sq))
                        {
                            from = false;
                        }
                        if (move.fromRow !== undefined &&
                            move.fromRow !== utils.row(sq))
                        {
                            from = false;
                        }
                        if (from) {
                            this._move(sq, move.dest);
                            return;
                        }
                    }
                }
            }
        }
    };

    ChessGame.prototype._moveBishop = function(move) {
        this._checkCapture(move);
        this._checkEmpty(move);
        var cl = utils.col(move.dest);
        var rw = utils.row(move.dest);
        for (var i = -1; i <= 1; i+=2) {
            for (var j = -1; j <= 1; j+=2) {
                for (var k = 1; k <= 7; k++) {
                    var c = cl + k*i;
                    var r = rw + k*j;
                    var sq = utils.toSquare(c, r);
                    var p = this.pieces[sq];
                    if (p !== undefined) {
                        if (p.type() === "B" && this._isPlayerColor(p)) {
                            var from = true;
                            if (move.fromCol !== undefined &&
                                move.fromCol !== utils.col(sq))
                            {
                                from = false;
                            }
                            if (move.fromRow !== undefined &&
                                move.fromRow !== utils.row(sq))
                            {
                                from = false;
                            }
                            if (from) {
                                this._move(sq, move.dest);
                                return;
                            }
                        } else {
                            break;
                        }
                    }
                }
            }
        }
    };

    ChessGame.prototype._moveRook = function(move) {
        this._checkCapture(move);
        this._checkEmpty(move);
        var cl = utils.col(move.dest);
        var rw = utils.row(move.dest);
        for (var i = 0; i <= 1; i++) {
            for (var j = -1; j <= 1; j+=2) {
                for (var k = 1; k <= 7; k++) {
                    var c = cl + k*i*j;
                    var r = rw + k*(1-i)*j;
                    var sq = utils.toSquare(c, r);
                    var p = this.pieces[sq];
                    if (p !== undefined) {
                        if (p.type() === "R" && this._isPlayerColor(p)) {
                            var from = true;
                            if (move.fromCol !== undefined &&
                                move.fromCol !== utils.col(sq))
                            {
                                from = false;
                            }
                            if (move.fromRow !== undefined &&
                                move.fromRow !== utils.row(sq))
                            {
                                from = false;
                            }
                            if (from) {
                                this._move(sq, move.dest);
                                return;
                            }
                        } else {
                            break;
                        }
                    }
                }
            }
        }
        throw ("Rook cannot move to " + move.dest);
    };

    ChessGame.prototype._moveQueen = function(move) {
        this._checkCapture(move);
        this._checkEmpty(move);
        var cl = utils.col(move.dest);
        var rw = utils.row(move.dest);
        for (var i = -1; i <= 1; i++) {
            for (var j = -1; j <= 1; j++) {
                for (var k = 1; k <= 7; k++) {
                    var c = cl + k*i;
                    var r = rw + k*j;
                    var sq = utils.toSquare(c, r);
                    var p = this.pieces[sq];
                    if (p !== undefined) {
                        if (p.type() === "Q" && this._isPlayerColor(p)) {
                            var from = true;
                            if (move.fromCol !== undefined &&
                                move.fromCol !== utils.col(sq))
                            {
                                from = false;
                            }
                            if (move.fromRow !== undefined &&
                                move.fromRow !== utils.row(sq))
                            {
                                from = false;
                            }
                            if (from) {
                                this._move(sq, move.dest);
                                return;
                            }
                        } else {
                            break;
                        }
                    }
                }
            }
        }
    };

    ChessGame.prototype._moveKing = function(move) {
        this._checkCapture(move);
        this._checkEmpty(move);
        var cl = utils.col(move.dest);
        var rw = utils.row(move.dest);
        for (var i = -1; i <= 1; i++) {
            for (var j = -1; j <= 1; j++) {
                var c = cl + i;
                var r = rw + j;
                var sq = utils.toSquare(c, r);
                var p = this.pieces[sq];
                if (p !== undefined) {
                    if (p.type() === "K" && this._isPlayerColor(p)) {
                        var from = true;
                        if (move.fromCol !== undefined &&
                            move.fromCol !== utils.col(sq))
                        {
                            from = false;
                        }
                        if (move.fromRow !== undefined &&
                            move.fromRow !== utils.row(sq))
                        {
                            from = false;
                        }
                        if (from) {
                            this._move(sq, move.dest);
                            return;
                        }
                    } else {
                        break;
                    }
                }
            }
        }
    };

    ChessGame.prototype.move = function(moves) {
        var splits = moves.split(" ");
        for (var i in splits) {
            var mv = splits[i];
            try {
                if (mv === "O-O-O") {
                    this._moveCasteling(true);
                } else if (mv === "O-O") {
                    this._moveCasteling(false);
                } else {
                    var move = parser.parse(mv);
                    var fct = this.moveFct[move.piece];
                    var args = [];
                    args.push(move);
                    fct.apply(this, args);
                }
                this.playerWhite = !this.playerWhite;
            } catch (e) {
                throw("Invalid move: " + mv + "\n" + e);
            }
        }
    };

    ChessGame.prototype.draw = function(id) {
        g.drawBoard(this, id);
    };
    
    return {
        newGame: function() {
            if (arguments.length > 0) {
                //alert(arguments[0]);
            }
            var game = new ChessGame();
            game.initGame();
            return game;
        }
    };
}();
